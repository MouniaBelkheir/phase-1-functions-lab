// Code your solution in this file!
// Calculate distance from the headquarters in blocks
function distanceFromHqInBlocks(blockNumber) {
    return Math.abs(42 - blockNumber);
  }
  
  // Calculate distance from the headquarters in feet
  function distanceFromHqInFeet(blockNumber) {
    return distanceFromHqInBlocks(blockNumber) * 264; // 1 block = 264 feet
  }
  
  // Calculate total distance travelled in feet
  function distanceTravelledInFeet(startBlock, endBlock) {
    return Math.abs(endBlock - startBlock) * 264; // 1 block = 264 feet
  }
  
  // Calculate fare price based on distance travelled
  function calculatesFarePrice(startBlock, endBlock) {
    const distanceInFeet = distanceTravelledInFeet(startBlock, endBlock);
  
    if (distanceInFeet <= 400) {
      return 0;
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
      return (distanceInFeet - 400) * 0.02;
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }