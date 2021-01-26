(function () {
  state = [];
  var StateService = function () {
    function Actions() {
      return { ADD_BUG: "bugAdded", RESOLVED_BUG: "bugResolved" };
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
      } else if (action.type === "bugAdded") {
        console.log("In BugAdded");
        let newState = [
          ...state,
          {
            id: action.payload.id,
            name: action.payload.name,
            project: action.payload.project,
            description: action.payload.description,
            resolved: false,
          },
        ];
        return newState;
      } else if (action.type === "bugRemoved") {
        return state.filter((bug) => bug.id !== action.payload.id);
      } else if (action.type === "bugResolved") {
        value = state.filter((bug) => bug.id === action.payload.id).resolved;

        return (state.filter(
          (bug) => bug.id === action.payload.id
        ).resolved = !value);
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
