'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.LRUCache = void 0;
class LRUCache {
    constructor(capacity) {
        this.head = null;
        this.tail = null;
        this.capacity = capacity;
        this.map = new Map();
    }
    /**
     * Retrieves the value associated with the given key and marks it as recently used.
     * @param key - The key to retrieve from the cache.
     * @returns The value associated with the key, or undefined if not found.
     */
    get(key) {
        const node = this.map.get(key);
        if (!node) {
            return undefined;
        }
        // Move the accessed node to the front (head) of the linked list
        this.removeNode(node);
        this.addNodeToFront(node);
        return node.value;
    }
    /**
     * Inserts a key-value pair into the cache. If the key already exists, it updates the value
     * and marks it as recently used. If the cache exceeds its capacity, it evicts the least
     * recently used item.
     * @param key - The key to insert or update.
     * @param value - The value to associate with the key.
     */
    set(key, value) {
        let node = this.map.get(key);
        if (node) {
            // Update existing node and move it to the front
            node.value = value;
            this.removeNode(node);
            this.addNodeToFront(node);
        } else {
            // Create a new node
            node = new Node(key, value);
            this.addNodeToFront(node);
            this.map.set(key, node);
            // Evict the least recently used item if capacity is exceeded
            if (this.map.size > this.capacity) {
                if (this.tail) {
                    this.map.delete(this.tail.key);
                    this.removeNode(this.tail);
                }
            }
        }
    }
    /**
     * Removes a node from the doubly linked list.
     * @param node - The node to remove.
     */
    removeNode(node) {
        if (node.prev) {
            node.prev.next = node.next;
        } else {
            // Node is the head
            this.head = node.next;
        }
        if (node.next) {
            node.next.prev = node.prev;
        } else {
            // Node is the tail
            this.tail = node.prev;
        }
        node.prev = null;
        node.next = null;
    }
    /**
     * Adds a node to the front (head) of the doubly linked list.
     * @param node - The node to add.
     */
    addNodeToFront(node) {
        node.next = this.head;
        node.prev = null;
        if (this.head) {
            this.head.prev = node;
        }
        this.head = node;
        if (!this.tail) {
            this.tail = node;
        }
    }
}
exports.LRUCache = LRUCache;
class Node {
    constructor(key, value) {
        this.prev = null;
        this.next = null;
        this.key = key;
        this.value = value;
    }
}
