class Node:
    def __init__(self, value, initial_val, alias):
        self.value = value
        self.initial_val = initial_val
        self.alias = alias
        self.children = []
        self.edge_costs = {}  # Dictionary to store costs to children

    def add_child(self, child, cost):
        self.children.append(child)
        self.edge_costs[child.value] = cost

# Create nodes with initial values and aliases
A = Node('A', 4, 'CG')
B = Node('B', 2, 'PSA')
C = Node('C', 7, 'SP')
D = Node('D', 8, 'Ring')

# Build tree structure with costs
A.add_child(B, 4)  # AB=4
A.add_child(C, 3)  # AC=3
B.add_child(D, 6)  # BD=6 

import networkx as nx
import matplotlib.pyplot as plt

def visualize_tree():
    G = nx.DiGraph()
    
    # Add nodes with their initial values and aliases
    for node in [A, B, C, D]:
        G.add_node(node.value, initial_val=node.initial_val, alias=node.alias)
    
    # Add edges with costs
    edges = [
        (A.value, B.value, A.edge_costs[B.value]),
        (A.value, C.value, A.edge_costs[C.value]),
        (B.value, D.value, B.edge_costs[D.value])
    ]
    G.add_weighted_edges_from(edges)
    
    # Set up custom positions for balanced tree
    pos = {
        'A': (0.5, 1.0),    # Root (CG) at top center
        'B': (0.25, 0.5),   # PSA on left
        'C': (0.75, 0.5),   # SP on right
        'D': (0.25, 0.0)    # Ring under PSA
    }
    
    plt.figure(figsize=(10, 8))
    
    # Draw nodes
    nx.draw_networkx_nodes(G, pos, node_color='lightblue', node_size=500)
    
    # Draw edges
    nx.draw_networkx_edges(G, pos)
    
    # Add node labels with both name and initial value
    labels = {node: f'{G.nodes[node]["alias"]}\n({G.nodes[node]["initial_val"]})' 
             for node in G.nodes()}
    nx.draw_networkx_labels(G, pos, labels)
    
    # Add edge labels (costs)
    edge_labels = nx.get_edge_attributes(G, 'weight')
    nx.draw_networkx_edge_labels(G, pos, edge_labels)
    
    plt.title("XY Tree")
    plt.axis('off')
    plt.show()

# Call the visualization function
visualize_tree()