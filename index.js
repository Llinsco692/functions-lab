// 1. Function to calculate the distance from HQ in blocks
function distanceFromHqInBlocks(someValue) {
    if (someValue > 42) {
      return someValue - 42; // Return the positive difference if the block is greater than 42
    } else {
      return 42 - someValue; // Otherwise, return the positive difference by subtracting the block from 42
    }
  }
  
  // 2. Function to calculate the distance from HQ in feet
  function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264; // 264 feet per block
  }
  
  // 3. Function to calculate the distance traveled in feet between two blocks
  function distanceTravelledInFeet(start, destination) {
    if (destination > start) {
      return (destination - start) * 264; // Calculate the positive distance if the destination is greater
    } else {
      return (start - destination) * 264; // Otherwise, calculate the positive distance
    }
  }
  
  // 4. Function to calculate the fare price based on the distance
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
      return 0; // Free if distance is 400 feet or less
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02; // 2 cents per foot after the first 400 feet
    } else if (distance > 2000 && distance <= 2500) {
      return 25; // Flat fare of $25 for distances between 2000 and 2500 feet
    } else {
      return 'cannot travel that far'; // No ride for distances over 2500 feet
    }
  }
  