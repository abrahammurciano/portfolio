export {}

declare global {
    interface Set<T> {
        with(element : T) : Set<T>;
		without(element : T) : Set<T>;
    }
}

Set.prototype.with = function<T>(this: Set<T>, element: T): Set<T> {
	return new Set(this).add(element);
}

Set.prototype.without = function<T>(this: Set<T>, element: T): Set<T> {
	const newSet = new Set(this);
	newSet.delete(element);
	return newSet;
}