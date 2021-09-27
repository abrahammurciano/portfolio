export {}

declare global {
    interface Array<T> {
        with(element : T) : Array<T>;
		instead(toExclude: T, toInclude: T) : Array<T>;
    }
}

Array.prototype.with = function<T>(this: Array<T>, element: T): Array<T> {
	return this.concat([element]);
}

Array.prototype.instead = function<T>(this: Array<T>, toExclude: T, toInclude: T): Array<T> {
	const newArray = [...this];
	newArray[newArray.indexOf(toExclude)] = toInclude;
	return newArray;
}