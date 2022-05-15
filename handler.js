import distancesobject from "./distances.js";

const handler = function (obj) {
    const rtObj = {};
    const tasks = obj.tasktocarryout;
    if (tasks === "addtodistances") {
        distancesobject.add(obj.reply1);
        rtObj.reply1 = obj.reply1;
    }
    return rtObj;
};
export default Object.freeze(handler);