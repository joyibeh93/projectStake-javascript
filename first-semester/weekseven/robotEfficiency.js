function runRobot(state, robot, memory) {
    for (let turn = 0;; turn++) {
      if (state.parcels.length == 0) {
        return turn;
      }
      let action = robot(state, memory);
      state = state.move(action.direction);
      memory = action.memory;
    }
  }
  
  function findRoute(graph, from, to) {
    let work = [{ at: from, route: [] }];
    for (let i = 0; i < work.length; i++) {
      let { at, route } = work[i];
      for (let place of graph[at]) {
        if (place == to) return route.concat(place);
        if (!work.some(w => w.at == place)) {
          work.push({ at: place, route: route.concat(place) });
        }
      }
    }
  }
  
  function distance(placeA, placeB) {
    const dx = placeA.x - placeB.x;
    const dy = placeA.y - placeB.y;
    return Math.sqrt(dx * dx + dy * dy);
  }
  
  function efficientRobot({ place, parcels }, route) {
    if (route.length == 0) {
      // Pick up the nearest parcel if there's one at the current place
      if (parcels.length > 0) {
        let nearestParcel = parcels[0];
        let nearestDistance = distance(place, nearestParcel.place);
  
        for (let i = 1; i < parcels.length; i++) {
          let distanceToParcel = distance(place, parcels[i].place);
          if (distanceToParcel < nearestDistance) {
            nearestParcel = parcels[i];
            nearestDistance = distanceToParcel;
          }
        }
  
        if (nearestParcel.place != place) {
          route = findRoute(roadGraph, place, nearestParcel.place);
        } else {
          route = findRoute(roadGraph, place, nearestParcel.address);
        }
      }
    }
  
    return { direction: route[0], memory: route.slice(1) };
  }
  
  runRobotAnimation(VillageState.random(), efficientRobot, []);
  
  
  
  //runRobotAnimation(VillageState.random(), yourRobot, memory);