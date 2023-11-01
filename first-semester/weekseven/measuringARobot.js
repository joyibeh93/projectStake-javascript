function compareRobots(robot1, memory1, robot2, memory2) {
    let totalStepsRobot1 = 0;
    let totalStepsRobot2 = 0;
  
    for (let i = 0; i < 100; i++) {
      const state = VillageState.random();
      totalStepsRobot1 += runRobot(state, robot1, memory1);
      totalStepsRobot2 += runRobot(state, robot2, memory2);
    }
  
    const averageStepsRobot1 = totalStepsRobot1 / 100;
    const averageStepsRobot2 = totalStepsRobot2 / 100;
  
    console.log(`Robot 1 took an average of ${averageStepsRobot1} steps per task.`);
    console.log(`Robot 2 took an average of ${averageStepsRobot2} steps per task.`);
  }
  
  
  compareRobots(routeRobot, [], goalOrientedRobot, []);