from collections import deque

queue = deque()

# Add elements
queue.append(10)
queue.append(20)
queue.append(30)

print("Queue:", queue)

# Remove first element
element = queue.popleft()

print("Removed:", element)
print("Queue after removal:", queue)