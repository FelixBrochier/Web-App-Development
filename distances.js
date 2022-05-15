const distancesobject = Object.create(null);

distancesobject.distancearray = [];

// Takes a string and reverses the order of its characters.
distancesobject.add = function (string) {
    distancesobject.distancearray.push(string);
    return distancesobject;
};

export default Object.freeze(distancesobject);
