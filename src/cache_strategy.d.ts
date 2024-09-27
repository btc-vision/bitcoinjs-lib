export declare class LRUCache<K, V> {
    private readonly capacity;
    private map;
    private head;
    private tail;
    constructor(capacity: number);
    /**
     * Retrieves the value associated with the given key and marks it as recently used.
     * @param key - The key to retrieve from the cache.
     * @returns The value associated with the key, or undefined if not found.
     */
    get(key: K): V | undefined;
    /**
     * Inserts a key-value pair into the cache. If the key already exists, it updates the value
     * and marks it as recently used. If the cache exceeds its capacity, it evicts the least
     * recently used item.
     * @param key - The key to insert or update.
     * @param value - The value to associate with the key.
     */
    set(key: K, value: V): void;
    /**
     * Removes a node from the doubly linked list.
     * @param node - The node to remove.
     */
    private removeNode;
    /**
     * Adds a node to the front (head) of the doubly linked list.
     * @param node - The node to add.
     */
    private addNodeToFront;
}
