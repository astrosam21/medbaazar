export function getPayload(tabledata, index, action, type, value) {
  var table = tabledata;
  switch (action.toLowerCase()) {
    case "delete":
      if (Array.isArray(index)) {
        index.map(checked => table.splice(checked, 1));
        return {
          type: type,
          payload: table
        };
      } else {
        table.splice(index, 1);
        return {
          type: type,
          payload: table
        };
      }
    case "edit":
      table[index][0] = value;
      return {
        type: type,
        payload: table
      };
    default:
      break;
  }
}

export function getPayloadForTimeline(
  type,
  id,
  status,
  data,
  tab,
  action,
  value
) {
  var timelineData = data;
  switch (status.toLowerCase()) {
    case "delete":
      if (Array.isArray(id)) {
        id.map(itemId => timelineData.splice(itemId, 1));
        return {
          type: action,
          payload: timelineData
        };
      } else {
        timelineData.splice(id, 1);
        return {
          type: action,
          payload: timelineData
        };
      }
    default:
      break;
  }
}
