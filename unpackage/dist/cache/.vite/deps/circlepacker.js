import "./chunk-P2LSHJDD.js";

// ../../../../../../Users/jackie/workspace/lif-app/LifCare/node_modules/circlepacker/dist/circlepacker.node.mjs
var Vector = class _Vector {
  /**
   * Creates an instance of Vector.
   *
   * @constructor
   * @param {number | VectorData} x - The X component of the Vector
   * @param {number} y - The Y component of the Vector
   */
  constructor(x, y) {
    if (typeof x === "object") {
      this.x = x.x;
      this.y = x.y;
    } else {
      this.x = x;
      this.y = y;
    }
  }
  /**
   * Returns a cloned instance of the Vector
   *
   * @returns {Vector}
   */
  cp() {
    return new _Vector(this.x, this.y);
  }
  /**
   * Multiplies the vector by a scalar
   *
   * @param {number} scalar - The scalar to multiply the Vector components with
   * @returns {this}
   */
  mul(scalar) {
    this.x *= scalar;
    this.y *= scalar;
    return this;
  }
  /**
   * Normalizes the Vector instance
   *
   * @returns {this}
   */
  normalize() {
    var l = this.length();
    this.x /= l;
    this.y /= l;
    return this;
  }
  /**
   * Calculates the length of the Vector instance
   *
   * @returns {number} - The length of the Vector instance
   */
  length() {
    var length = Math.sqrt(this.x * this.x + this.y * this.y);
    if (length < 5e-3 && length > -5e-3) {
      return 1e-6;
    }
    return length;
  }
  /**
   * Calculates the distance to another Vector instance
   *
   * @param {Vector} otherVector - The other Vector instance
   * @returns {number} - The distance to the other Vector instance
   */
  distance(otherVector) {
    var deltaX = this.x - otherVector.x;
    var deltaY = this.y - otherVector.y;
    return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
  }
  /**
   * Calculates the distance squared to another Vector instance
   *
   * @param {Vector} otherVector - The other Vector instance
   * @returns {number} - The distance squared to the other Vector instance
   */
  distanceSquared(otherVector) {
    var deltaX = this.x - otherVector.x;
    var deltaY = this.y - otherVector.y;
    return deltaX * deltaX + deltaY * deltaY;
  }
};
var PackedCircle = class {
  /**
   * Creates an instance of PackedCircle.
   *
   * @constructor
   * @param {PackedCircleData} - The data to instantiate the PackedCircle with
   */
  constructor({ id, radius, x, y, isPulledToTarget, isPinned }) {
    x = x || 0;
    y = y || 0;
    this.id = id;
    this.targetPosition = new Vector(0, 0);
    this.position = new Vector(x, y);
    this.previousPosition = new Vector(x, y);
    this.isPulledToTarget = isPulledToTarget;
    this.isPinned = isPinned;
    this.setRadius(radius);
  }
  /**
   * Update the position of the circle
   *
   * @param {Vector} aPosition - The new position of the circle
   */
  setPosition(aPosition) {
    this.previousPosition = this.position;
    this.position = aPosition.cp();
  }
  /**
   * Updates the radius of the circle
   *
   * @param {number} aRadius - The new radizs
   */
  setRadius(aRadius) {
    this.radius = aRadius;
    this.radiusSquared = aRadius * aRadius;
  }
  /**
   * Returns the distance to the last position of the circle
   *
   * @type {Vector}
   */
  get delta() {
    return new Vector(
      this.position.x - this.previousPosition.x,
      this.position.y - this.previousPosition.y
    );
  }
};
function processWorkerResponse(event) {
  return event.data ? JSON.parse(event.data) : void 0;
}
function isCircleValid(circle) {
  return circle && typeof circle === "object" && circle !== null && isIdValid(circle.id) && circle.radius && (circle.position && typeof circle.position.x === "number" && typeof circle.position.y === "number" || typeof circle.x === "number" && typeof circle.y === "number");
}
function isBoundsValid(bounds) {
  if (false === "object") {
    return false;
  }
  if (bounds.point1 && bounds.point2 && isPointValid(bounds.point1) && isPointValid(bounds.point2)) {
    return true;
  }
  if (typeof bounds.width === "number" && typeof bounds.height === "number") {
    return true;
  }
  if (typeof bounds.left === "number" && typeof bounds.top === "number" && typeof bounds.bottom === "number" && typeof bounds.right === "number") {
    return true;
  }
  if (typeof bounds.x1 === "number" && typeof bounds.y1 === "number" && typeof bounds.x2 === "number" && typeof bounds.y2 === "number") {
    return true;
  }
  return false;
}
function boundsDataToRect(bounds) {
  if (!isBoundsValid(bounds)) {
    return;
  }
  let left = 0;
  let top = 0;
  let right = 0;
  let bottom = 0;
  if (typeof bounds.left === "number") {
    left = bounds.left;
    right = bounds.right;
    top = bounds.top;
    bottom = bounds.bottom;
  } else if (typeof bounds.width == "number") {
    if (typeof bounds.x === "number") {
      left = bounds.x;
    }
    if (typeof bounds.y === "number") {
      top = bounds.y;
    }
    right = left + bounds.width;
    bottom = top + bounds.height;
  } else if (typeof bounds.x1 === "number") {
    left = bounds.x1;
    right = bounds.x2;
    top = bounds.y1;
    bottom = bounds.y2;
  } else if (bounds.point1) {
    left = bounds.point1.x;
    right = bounds.point2.x;
    top = bounds.point1.y;
    bottom = bounds.point2.y;
  }
  return { left, top, right, bottom };
}
function isIdValid(id) {
  return typeof id === "number" && !isNaN(id) || typeof id === "string" && id.length > 0;
}
function isNumberGreaterThan(number, min) {
  return typeof number === "number" && number >= min;
}
function isPointValid(point) {
  return typeof point === "object" && typeof point.x === "number" && typeof point.y === "number";
}
var PackedCircleManager = class {
  /**
   * Creates an instance of PackedCircleManager.
   *
   * @constructor
   */
  constructor() {
    this.allCircles = [];
    this.pinnedCircleIds = [];
    this.desiredTarget = void 0;
    this.boundsRect = void 0;
    this.damping = 0.025;
    this.isTargetPullActive = true;
    this.calculateOverlap = false;
    this.numberOfCenteringPasses = 1;
    this.numberOfCollisionPasses = 3;
    this.numberOfCorrectionPasses = 0;
  }
  /**
   * Set the boundary rectangle for the circle packing.
   *
   * @param {BoundsData} aBoundaryObject - The boundary to set
   */
  setBounds(aBoundaryObject) {
    const newBoundsRect = boundsDataToRect(aBoundaryObject);
    if (newBoundsRect) {
      this.boundsRect = newBoundsRect;
    }
  }
  /**
   * Add a circle
   *
   * @param {CircleData | PackedCircle} aCircle - A Circle to add, should already be created.
   */
  addCircle(aCircle) {
    if (!(aCircle instanceof PackedCircle)) {
      aCircle = new PackedCircle({
        id: aCircle.id,
        radius: aCircle.radius,
        x: aCircle.position.x || aCircle.x || 0,
        y: aCircle.position.y || aCircle.y || 0,
        isPinned: aCircle.isPinned || false,
        isPulledToTarget: typeof aCircle.isPulledToTarget === "boolean" ? aCircle.isPulledToTarget : true
      });
    }
    this.allCircles.push(aCircle);
    if (this.desiredTarget) {
      aCircle.targetPosition = this.desiredTarget.cp();
    }
  }
  /**
   * Remove a circle
   *
   * @param {CircleID} circleToRemoveId - Id of the circle to remove
   */
  removeCircle(circleToRemoveId) {
    this.allCircles = this.allCircles.filter((circle) => circle.id !== circleToRemoveId);
  }
  /**
   * Recalculate all circle positions
   */
  updatePositions() {
    const circleList = this.allCircles;
    const circleCount = circleList.length;
    for (let i = 0; i < circleCount; ++i) {
      const circle = circleList[i];
      circle.previousPosition = circle.position.cp();
    }
    if (this.desiredTarget && this.isTargetPullActive) {
      this.pushAllCirclesTowardTarget(this.desiredTarget);
    }
    this.handleCollisions();
    if (this.boundsRect) {
      this.handleBoundaryCollisions();
      if (this.numberOfCorrectionPasses > 0) {
        let overlapCorrectionTries = 0;
        let overlappingCirclesCount = Object.keys(this.getOverlappingCircles()).length;
        while (overlappingCirclesCount > 0 && overlapCorrectionTries < this.numberOfCorrectionPasses) {
          this.handleCollisions();
          this.handleBoundaryCollisions();
          overlappingCirclesCount = Object.keys(this.getOverlappingCircles()).length;
          overlapCorrectionTries += 1;
        }
      }
    }
  }
  /**
   * Update all circles to move towards a target position
   *
   * @param {VectorData} aTarget
   */
  pushAllCirclesTowardTarget(aTarget) {
    const circleMovement = new Vector(0, 0);
    const dragCircle = this.draggedCircle;
    const circleList = this.allCircles;
    const circleCount = circleList.length;
    for (let centeringPassNumber = 0; centeringPassNumber < this.numberOfCenteringPasses; centeringPassNumber++) {
      for (let circleIndex = 0; circleIndex < circleCount; circleIndex++) {
        const circle = circleList[circleIndex];
        if (circle.isPulledToTarget) {
          const isCircleKinematic = circle === dragCircle || this.isCirclePinned(circle.id);
          if (isCircleKinematic) {
            continue;
          }
          circleMovement.x = circle.position.x - aTarget.x;
          circleMovement.y = circle.position.y - aTarget.y;
          circleMovement.mul(this.damping);
          circle.position.x -= circleMovement.x;
          circle.position.y -= circleMovement.y;
        }
      }
    }
  }
  /**
   * Packs the circles towards the center of the bounds.
   * Each circle will have it's own 'targetPosition' later on
   */
  handleCollisions() {
    const circleCollisionMovement = new Vector(0, 0);
    const dragCircle = this.draggedCircle;
    const circleList = this.allCircles;
    const circleCount = circleList.length;
    for (let collisionPassNumber = 0; collisionPassNumber < this.numberOfCollisionPasses; collisionPassNumber++) {
      for (let circleAIndex = 0; circleAIndex < circleCount; circleAIndex++) {
        const circleA = circleList[circleAIndex];
        for (let circleBIndex = circleAIndex + 1; circleBIndex < circleCount; circleBIndex++) {
          const circleB = circleList[circleBIndex];
          const isCircleAPinned = this.isCirclePinned(circleA.id);
          const isCircleBPinned = this.isCirclePinned(circleB.id);
          const isCircleAKinematic = circleA === dragCircle || isCircleAPinned;
          const isCircleBKinematic = circleB === dragCircle || isCircleBPinned;
          if (
            // It's us!
            circleA === circleB || // Kinematic circles don't interact with eachother
            isCircleAKinematic && isCircleBKinematic
          ) {
            continue;
          }
          const dx = circleB.position.x - circleA.position.x;
          const dy = circleB.position.y - circleA.position.y;
          const combinedRadii = (circleA.radius + circleB.radius) * 1.08;
          const distanceSquared = circleA.position.distanceSquared(circleB.position);
          if (distanceSquared < combinedRadii * combinedRadii - 0.02) {
            circleCollisionMovement.x = dx;
            circleCollisionMovement.y = dy;
            circleCollisionMovement.normalize();
            const inverseForce = (combinedRadii - Math.sqrt(distanceSquared)) * 0.5;
            circleCollisionMovement.mul(inverseForce);
            if (!isCircleBKinematic) {
              if (isCircleAKinematic) {
                circleCollisionMovement.mul(2.2);
              }
              circleB.position.x += circleCollisionMovement.x;
              circleB.position.y += circleCollisionMovement.y;
            }
            if (!isCircleAKinematic) {
              if (isCircleBKinematic) {
                circleCollisionMovement.mul(2.2);
              }
              circleA.position.x -= circleCollisionMovement.x;
              circleA.position.y -= circleCollisionMovement.y;
            }
          }
        }
      }
    }
  }
  /**
   * Collide circles with boundaries
   */
  handleBoundaryCollisions() {
    if (this.boundsRect) {
      this.allCircles.forEach((circle) => {
        this.handleBoundaryForCircle(circle);
      });
    }
  }
  /**
   * Ensure the circle stays inside the boundaries
   *
   * @param {PackedCircle} aCircle - The circle to check
   */
  handleBoundaryForCircle(aCircle) {
    const { x, y } = aCircle.position;
    const radius = aCircle.radius;
    let isOverEdge = false;
    if (this.boundsRect) {
      if (x + radius >= this.boundsRect.right) {
        aCircle.position.x = this.boundsRect.right - radius;
        isOverEdge = true;
      } else if (x - radius < this.boundsRect.left) {
        aCircle.position.x = this.boundsRect.left + radius;
        isOverEdge = true;
      }
      if (y + radius > this.boundsRect.bottom) {
        aCircle.position.y = this.boundsRect.bottom - radius;
        isOverEdge = true;
      } else if (y - radius < this.boundsRect.top) {
        aCircle.position.y = this.boundsRect.top + radius;
        isOverEdge = true;
      }
      if (isOverEdge && aCircle === this.draggedCircle) {
        this.draggedCircle = null;
      }
    }
  }
  /**
   * Calculate overlapping circles for each circle
   *
   * @returns {CirclePackerOverlappingCircles}
   */
  getOverlappingCircles() {
    const overlappingCircles = {};
    this.allCircles.forEach((circleA) => {
      const overlappingCirclesForCircle = this.allCircles.filter((circleB) => circleA.id !== circleB.id).map((circleB) => {
        const distanceBetweenCirclePositions = new Vector(circleA.position).distance(
          circleB.position
        );
        const isOverlapping = distanceBetweenCirclePositions < circleA.radius + circleB.radius;
        const overlapDistance = isOverlapping ? circleA.radius + circleB.radius - distanceBetweenCirclePositions : 0;
        return { overlappingCircleId: circleB.id, overlapDistance };
      }).filter((overlapData) => {
        return overlapData.overlapDistance > 0;
      });
      if (overlappingCirclesForCircle.length) {
        overlappingCircles[circleA.id] = overlappingCirclesForCircle;
      }
    });
    return overlappingCircles;
  }
  /**
   * Create a positions object that we can send via postmessage
   *
   * @returns {CirclePackerMovementResult}
   */
  getPositions() {
    const positions = this.allCircles.reduce((result, circle) => {
      result[circle.id] = {
        id: circle.id,
        position: circle.position,
        previousPosition: circle.previousPosition,
        radius: circle.radius,
        delta: circle.delta,
        isPulledToTarget: circle.isPulledToTarget,
        isPinned: circle.isPinned
      };
      return result;
    }, {});
    return positions;
  }
  /**
   * Force a certain circle to be the 'draggedCircle'.
   * Can be used to undrag a circle by calling setDraggedCircle(null)
   * @param {PackedCircle | null} aCircle - Circle to start dragging. It's assumed to be part of our list. No checks in place currently.
   */
  setDraggedCircle(aCircle) {
    this.draggedCircle = aCircle;
  }
  /**
   * Mark circle as dragging
   *
   * @param {CircleID} id - The ID of the circle we're dragging
   */
  dragStart(id) {
    const draggedCircle = this.allCircles.filter((circle) => circle.id === id)[0];
    this.setDraggedCircle(draggedCircle);
  }
  /**
   * Mark dragged circle as no longer dragging
   */
  dragEnd() {
    if (this.draggedCircle) {
      this.draggedCircle = null;
    }
  }
  /**
   * Update the position of the circle that is being dragged
   *
   * @param {CircleID} id - The id of the circle being dragged
   * @param {VectorData | Vector} position - The new position of the dragged circle
   */
  drag(id, position) {
    if (this.draggedCircle && position) {
      this.draggedCircle.position.x = position.x;
      this.draggedCircle.position.y = position.y;
    }
  }
  /**
   * Check if circle is marked as pinned
   *
   * @param {CircleID} id - The id of the circle to check
   * @returns {boolean}
   */
  isCirclePinned(id) {
    const circle = this.circleById(id);
    if (circle) {
      return circle.isPinned;
    }
    return false;
  }
  /**
   * Mark circle as pinned
   *
   * @param {CircleID} id - The id of the circle we want to pin
   */
  pinCircle(id) {
    const circle = this.circleById(id);
    if (circle) {
      circle.isPinned = true;
    }
  }
  /**
   * Mark circle as no longer pinned
   *
   * @param {CircleID} id - The id of the circle we want to unpin
   */
  unpinCircle(id) {
    const circle = this.circleById(id);
    if (circle) {
      circle.isPinned = false;
    }
  }
  /**
   * set the radius of a circle
   *
   * @param {CircleID} id - The id of the circle we want to update the radius of
   * @param {number} radius - The new radius
   */
  setCircleRadius(id, radius) {
    const circle = this.circleById(id);
    if (circle) {
      circle.setRadius(radius);
    }
  }
  /**
   * Update the targetPull value of a circle
   *
   * @param {CircleID} id - The id of the circle
   * @param {boolean} targetPull - The targetPull value
   */
  setCircleTargetPull(id, targetPull) {
    const circle = this.circleById(id);
    if (circle) {
      circle.isPulledToTarget = targetPull;
    }
  }
  /**
   * Set a global targetPull value
   *
   * @param {boolean} targetPull - The global canterPull value
   */
  setTargetPull(targetPull) {
    this.isTargetPullActive = targetPull;
  }
  /**
   * Gets a circle by its id
   *
   * @param {CircleID} id - The id of the circle we want
   * @returns {PackedCircle | undefined}
   */
  circleById(id) {
    return this.allCircles.filter((circle) => circle.id === id)[0];
  }
  /**
   * Sets the target position where the circles want to be
   *
   * @param {VectorData} aPosition - The position of the targetPull target
   */
  setTarget(aPosition) {
    this.desiredTarget = aPosition;
  }
  /**
   * Sets calculate overlap
   *
   * @param {boolean} calculateOverlap
   */
  setCalculateOverlap(calculateOverlap) {
    this.calculateOverlap = calculateOverlap;
  }
};
var WorkerLogic = class {
  constructor() {
    this.circleManager = new PackedCircleManager();
  }
  /**
   * Handle message events that were received from the main script
   * and trigger the appropriate actions
   *
   * @param {WorkerMessage} [message]
   * @param {WorkerResponseCallback} [handleResponse]
   */
  handleWorkerMessage(message, handleResponse) {
    if (message) {
      const { action } = message;
      switch (action.type) {
        case "SET_BOUNDS":
          this.circleManager.setBounds(action.bounds);
          break;
        case "SET_CENTERING_PASSES":
          this.circleManager.numberOfCenteringPasses = action.numberOfCenteringPasses;
          break;
        case "SET_COLLISION_PASSES":
          this.circleManager.numberOfCollisionPasses = action.numberOfCollisionPasses;
          break;
        case "SET_CORRECTION_PASSES":
          this.circleManager.numberOfCorrectionPasses = action.numberOfCorrectionPasses;
          break;
        case "SET_DAMPING":
          this.circleManager.damping = action.damping;
          break;
        case "SET_TARGET_PULL":
          this.circleManager.setTargetPull(action.targetPull);
          break;
        case "UPDATE":
          this.update();
          this.sendPositions(handleResponse);
          break;
        case "ADD_CIRCLES":
          this.addCircles(action.circles);
          break;
        case "REMOVE_CIRCLE":
          this.circleManager.removeCircle(action.id);
          break;
        case "DRAG_START":
          this.circleManager.dragStart(action.id);
          break;
        case "DRAG_END":
          this.circleManager.dragEnd(action.id);
          break;
        case "DRAG_MOVE":
          this.circleManager.drag(action.id, action.position);
          break;
        case "SET_CIRCLE_RADIUS":
          this.circleManager.setCircleRadius(action.id, action.radius);
          break;
        case "SET_CIRCLE_TARGET_PULL":
          this.circleManager.setCircleTargetPull(action.id, action.targetPull);
          break;
        case "SET_CALCULATE_OVERLAP":
          this.circleManager.setCalculateOverlap(action.calculateOverlap);
          break;
        case "PIN_CIRCLE":
          this.circleManager.pinCircle(action.id);
          break;
        case "UNPIN_CIRCLE":
          this.circleManager.unpinCircle(action.id);
          break;
        case "SET_TARGET":
          this.setTarget(action.target);
          break;
      }
    }
  }
  /**
   * Create new circles based on the received circle data
   *
   * @param {PackedCircleData[]} circles - The circles to add
   */
  addCircles(circles) {
    if (Array.isArray(circles) && circles.length) {
      circles.forEach((circle) => this.circleManager.addCircle(circle));
    } else {
      throw new Error("Circles array is malformed.");
    }
  }
  /**
   * Update the pull targets position
   *
   * @param {VectorData} target - The new target position
   */
  setTarget(target) {
    if (target && typeof target.x === "number" && typeof target.y === "number") {
      this.circleManager.setTarget(new Vector(target));
    }
  }
  /**
   * Calculate the next circle positions
   */
  update() {
    this.circleManager.updatePositions();
  }
  /**
   * Send the new circle positions to the main script
   *
   * @param {WorkerResponseCallback} [handleResponse]
   */
  sendPositions(handleResponse) {
    if (handleResponse) {
      const responseData = {
        type: "MOVED",
        updatedCircles: this.circleManager.getPositions(),
        target: this.circleManager.desiredTarget
      };
      if (this.circleManager.calculateOverlap) {
        responseData["overlappingCircles"] = this.circleManager.getOverlappingCircles();
      }
      handleResponse(responseData);
    }
  }
};
var CirclePacker = class {
  /**
   * Creates an instance of CirclePacker.
   *
   * @constructor
   * @param {CirclePackerParams} params - The params to instantiate the CirclePacker with
   */
  constructor(params = {}) {
    this.useWorker = params.noWorker ? false : true;
    this.destroyAfterOneMove = params.destroyAfterOneMove ? true : false;
    {
      this.workerLogic = new WorkerLogic();
    }
    this.onMove = params.onMove || null;
    this.lastCirclePositions = {};
    if (params.centeringPasses) {
      this.setCenteringPasses(params.centeringPasses);
    }
    if (params.collisionPasses) {
      this.setCollisionPasses(params.collisionPasses);
    }
    if (params.correctionPasses) {
      this.setCorrectionPasses(params.correctionPasses);
    }
    if (typeof params.calculateOverlap === "boolean") {
      this.setCalculateOverlap(params.calculateOverlap);
    }
    if (params.bounds) {
      this.setBounds(params.bounds);
    }
    if (params.target) {
      this.setTarget(params.target);
    }
    if (params.circles && params.circles.length) {
      this.addCircles(params.circles);
    }
    {
      this.update();
    }
  }
  /**
   * Handle message that was received from worker
   *
   * @param {MessageEvent<string>} event
   */
  receivedWorkerMessage(event) {
    const response = processWorkerResponse(event);
    if (response) {
      this.updateListeners(response);
    }
  }
  /**
   * Send message to worker
   *
   * @param {WorkerAction} action
   */
  updateWorker(action) {
    const workerMessage = { messageId: Date.now(), action };
    {
      this.workerLogic.handleWorkerMessage(workerMessage, (response) => {
        this.updateListeners(response);
      });
    }
  }
  /**
   * Update the callbacks
   *
   * @param {WorkerResponse} response
   */
  updateListeners(response) {
    if (response.type === "MOVED" && typeof this.onMove === "function") {
      this.lastCirclePositions = response.updatedCircles;
      this.onMove(response.updatedCircles, response.target, response.overlappingCircles);
    }
    if (this.destroyAfterOneMove) {
      this.destroy();
    }
  }
  /**
   * API for adding circles
   *
   * @throws Will throw an error if circles parameter is malformed
   * @param {PackedCircleData[]} circles - The circles to add
   */
  addCircles(circles) {
    if (!Array.isArray(circles)) {
      throw new Error(`Can't add circles: the circles parameter is not an array.`);
    }
    if (circles.length) {
      if (!circles.every(isCircleValid)) {
        throw new Error(`Can't add circles: some of the items are not well formatted.`);
      }
      this.updateWorker({ type: "ADD_CIRCLES", circles });
    }
  }
  /**
   * Add a circle
   *
   * @param {PackedCircleData} circle - The circle to add
   */
  addCircle(circle) {
    this.addCircles([circle]);
  }
  /**
   * Removes a circle
   *
   * @throws Will throw an error if the circle id is malformed
   * @param {CircleRef} circleRef - The circle to remove
   */
  removeCircle(circleRef) {
    const circleId = typeof circleRef === "object" && circleRef.id !== void 0 ? circleRef.id : circleRef;
    if (!isIdValid(circleId)) {
      throw new Error(`Can't remove circle: the circleRef parameter is malformed.`);
    } else {
      this.updateWorker({ type: "REMOVE_CIRCLE", id: circleId });
    }
  }
  /**
   * Pins a circle in place
   *
   * @throws Will throw an error if the circle id is malformed
   * @param {CircleRef} circleRef - The circle to pin
   */
  pinCircle(circleRef) {
    const circleId = typeof circleRef === "object" && circleRef.id !== void 0 ? circleRef.id : circleRef;
    if (!isIdValid(circleId)) {
      throw new Error(`Can't pin circle: the circleRef parameter is malformed.`);
    } else {
      this.updateWorker({ type: "PIN_CIRCLE", id: circleId });
    }
  }
  /**
   * Unpins a circle
   *
   * @throws Will throw an error if the circle id is malformed
   * @param {CircleRef} circleRef - The circle to unpin
   */
  unpinCircle(circleRef) {
    const circleId = typeof circleRef === "object" && circleRef.id !== void 0 ? circleRef.id : circleRef;
    if (!isIdValid(circleId)) {
      throw new Error(`Can't unpin circle: the circleRef parameter is malformed.`);
    } else {
      this.updateWorker({ type: "UNPIN_CIRCLE", id: circleId });
    }
  }
  /**
   * Description placeholder
   *
   * @throws Will throw an error if the circle id is malformed
   * @param {CircleRef} circleRef - The circle to pin
   * @param {number} radius - The new radius
   */
  setCircleRadius(circleRef, radius) {
    const circleId = typeof circleRef === "object" && circleRef.id !== void 0 ? circleRef.id : circleRef;
    if (!isIdValid(circleId)) {
      throw new Error(`Can't set circle radius: the circleRef parameter is malformed.`);
    } else if (!isNumberGreaterThan(radius, 0)) {
      throw new Error(`Can't set circle radius: the passed radius is malformed.`);
    } else {
      this.updateWorker({ type: "SET_CIRCLE_RADIUS", id: circleId, radius });
    }
  }
  /**
   * Set targetPull value of a Circle
   *
   * @param {CircleRef} circleRef - The circle
   * @param {boolean} targetPull - The new targetPull value
   */
  setCircleTargetPull(circleRef, targetPull) {
    const circleId = typeof circleRef === "object" && circleRef.id !== void 0 ? circleRef.id : circleRef;
    if (!isIdValid(circleId)) {
      throw new Error(`Can't set circle center pull: the circleRef parameter is malformed.`);
    } else {
      this.updateWorker({
        type: "SET_CIRCLE_TARGET_PULL",
        id: circleId,
        targetPull: !!targetPull
      });
    }
  }
  /**
   * Set global center pull value
   *
   * @param {boolean} targetPull - The new targetPull value
   */
  setTargetPull(targetPull) {
    this.updateWorker({ type: "SET_TARGET_PULL", targetPull: !!targetPull });
  }
  /**
   * Set new boundaries for the area
   *
   * @throws Will throw an error if the circle id is malformed
   * @param {BoundsData} bounds - The new bounddaries
   */
  setBounds(bounds) {
    if (!isBoundsValid(bounds)) {
      throw new Error(`Can't set bounds: the bounds parameter is malformed.`);
    } else {
      this.updateWorker({ type: "SET_BOUNDS", bounds });
    }
  }
  /**
   * Set the position of the pull target
   *
   * @throws Will throw an error if the target position is malformed
   * @param {VectorData} targetPos - The position of the pull target
   */
  setTarget(targetPos) {
    if (!isPointValid(targetPos)) {
      throw new Error(`Can't set target: the targetPos parameter is malformed.`);
    } else {
      this.updateWorker({ type: "SET_TARGET", target: targetPos });
    }
  }
  /**
   * Updates the number of centering passes
   *
   * It's (O)logN^2 so use increase at your own risk.
   * Play with these numbers - see what works best for your project.
   *
   * @throws Will throw an error if the number of centering passes is malformed
   * @param {number} numberOfCenteringPasses - The new number of centering passes. Expects a number >= 1
   */
  setCenteringPasses(numberOfCenteringPasses) {
    if (!isNumberGreaterThan(numberOfCenteringPasses, 1)) {
      throw new Error(
        `Can't set centering passes: the numberOfCenteringPasses parameter is malformed.`
      );
    } else {
      this.updateWorker({ type: "SET_CENTERING_PASSES", numberOfCenteringPasses });
    }
  }
  /**
   * Sets the number of collision passes
   *
   * It's (O)logN^2 so use increase at your own risk.
   * Play with these numbers - see what works best for your project.
   *
   * @throws Will throw an error if the number of collision passes is malformed
   * @param {number} numberOfCollisionPasses - Sets the new number of collision passes. Expects a number >= 1
   */
  setCollisionPasses(numberOfCollisionPasses) {
    if (!isNumberGreaterThan(numberOfCollisionPasses, 1)) {
      throw new Error(
        `Can't set collisionPasses passes: the numberOfCollisionPasses parameter is malformed.`
      );
    } else {
      this.updateWorker({ type: "SET_COLLISION_PASSES", numberOfCollisionPasses });
    }
  }
  /**
   * Sets the number of correction passes
   *
   * This is can be a very expensive operation so increase at your own risk.
   * Play with these numbers - see what works best for your project.
   *
   * @throws Will throw an error if the number of collision passes is malformed
   * @param {number} numberOfCorrectionPasses - Sets the new number of correction passes. Expects a number >= 0
   */
  setCorrectionPasses(numberOfCorrectionPasses) {
    if (!isNumberGreaterThan(numberOfCorrectionPasses, 0)) {
      throw new Error(
        `Can't set CorrectionPasses passes: the numberOfCorrectionPasses parameter is malformed.`
      );
    } else {
      this.updateWorker({ type: "SET_CORRECTION_PASSES", numberOfCorrectionPasses });
    }
  }
  /**
   * Should we calculate the overlap on each update?
   *
   * @throws Will throw an error if calculateOverlap is not boolean
   * @param {boolean} calculateOverlap - Sets the calculateOverlap value
   */
  setCalculateOverlap(calculateOverlap) {
    if (typeof calculateOverlap !== "boolean") {
      throw new Error(
        `Can't set calculateOverlap the calculateOverlap parameter is not a boolean.`
      );
    } else {
      this.updateWorker({ type: "SET_CALCULATE_OVERLAP", calculateOverlap });
    }
  }
  /**
   * Sets the damping value
   *
   * @throws Will throw an error if damping value is malformed
   * @param {number} damping - The new damping value. Expects a number be between 0 and 1
   */
  setDamping(damping) {
    if (!(typeof damping === "number" && damping > 0 && damping < 1)) {
      throw new Error(`Can't set damping: the damping parameter is malformed.`);
    } else {
      this.updateWorker({ type: "SET_DAMPING", damping });
    }
  }
  /**
   * Sends a signal to the worker to update the state
   */
  update() {
    this.updateWorker({ type: "UPDATE" });
  }
  /**
   * Mark a circle as being dragged
   *
   * @throws Will throw an error if circle reference is malformed
   * @param {CircleRef} circleRef - The circle reference
   */
  dragStart(circleRef) {
    const circleId = typeof circleRef === "object" && circleRef.id !== void 0 ? circleRef.id : circleRef;
    if (!isIdValid(circleId)) {
      throw new Error(`Can't start dragging circle: the circleRef parameter is malformed.`);
    } else {
      this.updateWorker({ type: "DRAG_START", id: circleId });
    }
  }
  /**
   * Update the position of a circle that is being dragged
   *
   * @throws Will throw an error if circle reference or the position is malformed
   * @param {CircleRef} circleRef - The circle reference
   * @param {VectorData} position - The new position of the circle
   */
  drag(circleRef, position) {
    const circleId = typeof circleRef === "object" && circleRef.id !== void 0 ? circleRef.id : circleRef;
    if (!isIdValid(circleId)) {
      throw new Error(`Can't drag circle: the circleRef parameter is malformed.`);
    } else if (!isPointValid(position)) {
      throw new Error(`Can't drag circle: the position parameter is malformed.`);
    } else {
      this.updateWorker({ type: "DRAG_MOVE", id: circleId, position });
    }
  }
  /**
   * Mark a circle as no longer being dragged
   *
   * @throws Will throw an error if circle reference is malformed
   * @param {CircleRef} circleRef - The circle reference
   */
  dragEnd(circleRef) {
    const circleId = typeof circleRef === "object" && circleRef.id !== void 0 ? circleRef.id : circleRef;
    if (!isIdValid(circleId)) {
      throw new Error(`Can't end dragging circle: the circleRef parameter is malformed.`);
    } else {
      this.updateWorker({ type: "DRAG_END", id: circleId });
    }
  }
  /**
   * Tear down worker, remove cllbacks
   */
  destroy() {
    if (this.worker) {
      this.worker.terminate();
    }
    this.onMove = null;
  }
};
function pack(params = {}) {
  return new Promise((resolve, reject) => {
    try {
      let packer;
      const circlePackerParams = {
        ...params,
        animationLoop: false,
        destroyAfterOneMove: true,
        onMove: (updatedCircles, target, overlappingCircles) => {
          resolve({
            updatedCircles,
            target,
            overlappingCircles
          });
        }
      };
      packer = new CirclePacker(circlePackerParams);
    } catch (error) {
      reject(error);
    }
  });
}
CirclePacker.pack = pack;
export {
  CirclePacker,
  pack
};
/*! Bundled license information:

circlepacker/dist/circlepacker.node.mjs:
  (*! circlepacker v2.1.0 | MIT (c) 2024 Georg Fischer <hi@snorpey.com> | https://github.com/snorpey/circlepacker#readme *)
*/
//# sourceMappingURL=circlepacker.js.map
