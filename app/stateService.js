(function () {
  let state = {
    defects: { items: [] },
    user: {},
  };

  var StateService = function () {
    function Actions() {
      return {
        ADD_BUG: "bugAdded",
        RESOLVED_BUG: "bugResolved",
        DELETE_BUG: "bugRemoved",
      };
    }
    function createStore() {
      Reducer();
    }

    function getState() {
      return state;
    }

    function dispatch(state, action) {
      Reducer(state, action);
    }

    function Reducer(state = [], action) {
      if (!action) {
        return state;
      } else if (action.type === Actions.ADD_BUG) {
        let defectItems = [
          ...state.defects.items,
          {
            id: action.payload.id,
            name: action.payload.name,
            project: action.payload.project,
            description: action.payload.description,
            resolved: false,
          },
        ];
        state.defects.items = defectItems;

        return state;
      } else if (action.type === Actions.DELETE_BUG) {
        let items = state.defects.items.filter(
          (bug) => bug.id != action.payload.id
        );
        state.defects.items = items;
      } else if (action.type === Actions.RESOLVED_BUG) {
        let defectItems = [...state.defects.items];
        let item = defectItems.filter((bug) => bug.id === action.payload.id)[0];
        item.resolved = !item.resolved;
      } else return state;
    }

    return {
      createStore: createStore,
      getState: getState,
      dispatch: dispatch,
    };
  };
  var module = angular.module("myApp");
  module.factory("StateService", StateService);
})();
