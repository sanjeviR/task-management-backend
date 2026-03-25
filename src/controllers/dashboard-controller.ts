import { Response } from "express";
import prisma from "../configs/db";
import { AuthRequest } from "../middlewares/auth-middleware";

export const getDashboardStats = async (
  req: AuthRequest,
  res: Response,
): Promise<void> => {
  try {
    const userRole = req.user!.role.toUpperCase();
    const userId = req.user!.id;


    //ADMIN DASHBOARD
    if (userRole === "ADMIN") {
      const projectCount = await prisma.project.count();
      const taskCount = await prisma.task.count();

          //manager list
    const managersRaw = await prisma.user.findMany({
      where: { role: "MANAGER" },
      select: { id: true, name: true },
    });
    const managersData = managersRaw.map((m) => ({ id: m.id, name: m.name }));

      //fetch all user
      const allUser = await prisma.user.findMany({
        select: { id: true, name: true, role: true },
      });
      const users = allUser.map((u) => ({
        id: u.id,
        name: u.name,
        role: u.role.toLowerCase(),
      }));
      //calculate admin stats
      const totalUser = users.length;
      const regularUsers = users.filter((u) => u.role === "user").length;
      const managers = users.filter((u) => u.role === "manager").length;

      //fetch project with manager name and tasks
      const projectsData = await prisma.project.findMany({
        select: {
          id: true,
          title: true,
          manager: { select: { name: true } },
          tasks: { select: { status: true } },
        },
      });
      const projectsWithTaskStatus = projectsData.map((project) => {
        let to_do = 0,
          in_progress = 0,
          done = 0;
        project.tasks.forEach((task) => {
          if (task.status === "To Do") to_do++;
          if (task.status === "In Progress") in_progress++;
          if (task.status === "Done") done++;
        });
        return {
          id: project.id,
          title: project.title,
          manager_name: project.manager?.name || "Unassigned",
          task_counts: {
            total: project.tasks.length,
            to_do,
            in_progress,
            done,
          },
        };
      });
      res.status(200).json({
        userRole: "admin",
        users,
        projectCount,
        taskCount,
        projectsWithTaskStatus,
        stats: { totalUser, regularUsers, managers },
        managersData,
      });
      return;
    }
    if (userRole === "MANAGER") {
      const projectCount = await prisma.project.count({
        where: { manager_id: userId },
      });
      const taskCount = await prisma.task.count({
        where: { project: { manager_id: userId } },
      });

          //manager list
    const managersRaw = await prisma.user.findMany({
      where: { role: "MANAGER" },
      select: { id: true, name: true },
    });
    const managersData = managersRaw.map((m) => ({ id: m.id, name: m.name }));

      const projectsData = await prisma.project.findMany({
        where: { manager_id: userId },
        select: {
          id: true,
          title: true,
          manager: { select: { name: true } },
          tasks: { select: { status: true } },
        },
      });
      const projectWithTaskStatus = projectsData.map((project) => {
        let to_do = 0,
          in_progress = 0,
          done = 0;
        project.tasks.forEach((task) => {
          if (task.status === "To Do") to_do++;
          if (task.status === "In Progress") in_progress++;
          if (task.status === "Done") done++;
        });
        return {
          id: project.id,
          title: project.title,
          manager_name: project.manager.name || "Undefined",
          task_counts: {
            total: project.tasks.length,
            to_do,
            in_progress,
            done,
          },
        };
      });
      res.status(200).json({
        userRole: "manager",
        projectCount,
        taskCount,
        projectWithTaskStatus,
        stats: { totalProjects: projectCount, totalTasks: taskCount },
        managersData,
      });
      return;
    }
    const projectCount = await prisma.project.count({
      where: { tasks: { some: { assigned_to: userId } } },
    });
    const taskCount = await prisma.task.count({
      where: { assigned_to: userId },
    });

    const userTaskByStats = await prisma.task.groupBy({
      by: ["status"],
      where: { assigned_to: userId },
      _count: { id: true },
    });
    let to_do = 0,
      in_progress = 0,
      done = 0;
    userTaskByStats.forEach((item) => {
      if (item.status === "To Do") to_do = item._count.id;
      if (item.status === "In Progress") in_progress = item._count.id;
      if (item.status === "Done") done = item._count.id;
    });
    const projectsData = await prisma.project.findMany({
      where: {
        tasks: { some: { assigned_to: userId } },
      },
      select: {
        id: true,
        title: true,
        manager: { select: {id: true, name: true } },
        tasks: {
          where: { assigned_to: userId },
          select: { status: true },
        },
      },
    });
    const uniqueManagers = new Map();
    const projectWithTaskStatus = projectsData.map((project) => {
      if(project.manager){
        uniqueManagers.set(project.manager.id,{id:project.manager.id,name:project.manager.name});
      }
      let to_do = 0,
        in_progress = 0,
        done = 0;
      project.tasks.forEach((task) => {
        if (task.status === "To Do") to_do++;
        if (task.status === "In Progress") in_progress++;
        if (task.status === "Done") done++;
      });
      return {
        id: project.id,
        title: project.title,
        manager_name: project.manager?.name || "Unassigned",
        task_counts: {
          total: project.tasks.length,
          to_do,
          in_progress,
          done,
        },
      };
    });
    //convert map to array
    const managersData = Array.from(uniqueManagers.values());
    res.status(200).json({
      userRole: "user",
      taskCount,
      projectCount,
      projectWithTaskStatus,
      taskStatusCounts: { to_do, in_progress, done, total: taskCount },
      status: {
        toDoTasks: to_do,
        inProgressTasks: in_progress,
        completedTasks: done,
      },
      managersData,
    });
  } catch (error: any) {
    console.error("Error fetching Dashboard stats:", error);
    res.status(500).json({ status: "error", message: "Failed to fetch data" });
  }
};
