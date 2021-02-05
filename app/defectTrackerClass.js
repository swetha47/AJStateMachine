/**
 * Class to keep track of all the defects and store the state.
 */
class DefectTracker {
  state = {};
  constructor() {
    this.state = {
      defects: { items: [] },
      user: {},
    };
  }
  /**
   * Property retrieves the state object.
   */
  get state() {
    return this.state;
  }
  /**
   * Property returns user object from the state object.
   */
  get user() {
    return this.state.user;
  }

  //#region Add Resolve and Delete functions for defect items

  /**
   * Creates a new defect with the given information and add it to the state object.
   * @param {number} id
   * @param {string} name
   * @param {string} project
   * @param {string} description
   * @param {boolean} resolved
   */
  addNewBug(id, name, project, description, resolved) {
    let defectItems = [
      ...this.state.defects.items,
      {
        id: id,
        name: name,
        project: project,
        description: description,
        resolved: resolved,
      },
    ];
    this.state.defects.items = defectItems;
  }
  /**
   * Deletes the bug with id <tt>defectId</tt> and updates the state object.
   * @param {number} defectId
   */
  deleteBug(defectId) {
    let defectItems = this.state.defects.items.filter(
      (bug) => bug.id != defectId
    );
    this.state.defects.items = defectItems;
  }
  /**
   * Updates the resolved status of the bug with id <tt>defectId</tt> and the state object is updated.
   * @param {number} defectId
   */
  resolveBug(defectId) {
    let defectItems = [...this.state.defects.items];
    let item = defectItems.filter((bug) => bug.id === defectId)[0];
    item.resolved = !item.resolved;
  }
  //#endregion
}
