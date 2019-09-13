(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{127:function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"b",function(){return p});var n=a(0),r=a.n(n),i=r.a.createContext({}),o=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):Object.assign({},t,e)),a},l=function(e){var t=o(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){return r.a.createElement(r.a.Fragment,{},e.children)}},h=function(e){var t=e.components,a=e.mdxType,n=e.originalType,i=e.parentName,l=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}(e,["components","mdxType","originalType","parentName"]),c=o(t);return r.a.createElement(c[i+"."+a]||c[a]||s[a]||n,t?Object.assign({},l,{components:t}):l)};function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"},96:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",function(){return o}),a.d(t,"rightToc",function(){return l}),a.d(t,"default",function(){return h});a(0);var n=a(127);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o={id:"graph",title:"Graph"},l=[{value:"Study links",id:"study-links",children:[]},{value:"Notes",id:"notes",children:[]},{value:"Graph search algorithms:",id:"graph-search-algorithms",children:[]},{value:"Corner cases",id:"corner-cases",children:[]},{value:"Recommended Leetcode questions",id:"recommended-leetcode-questions",children:[]},{value:"More questions",id:"more-questions",children:[]}],c={rightToc:l},s="wrapper";function h(e){var t=e.components,a=i(e,["components"]);return Object(n.b)(s,r({},c,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",null,Object(n.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"study-links"})),Object(n.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#study-links"}),"#"),"Study links"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"https://medium.com/basecs/from-theory-to-practice-representing-graphs-cfd782c5be38"}),"From Theory To Practice: Representing Graphs")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"https://medium.com/basecs/deep-dive-through-a-graph-dfs-traversal-8177df5d0f13"}),"Deep Dive Through A Graph: DFS Traversal")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"https://medium.com/basecs/going-broad-in-a-graph-bfs-traversal-959bd1a09255"}),"Going Broad In A Graph: BFS Traversal"))),Object(n.b)("h2",null,Object(n.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"notes"})),Object(n.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#notes"}),"#"),"Notes"),Object(n.b)("p",null,"Be familiar with the various graph representations, graph search algorithms and their time and space complexities."),Object(n.b)("p",null,"You can be given a list of edges and tasked to build your own graph from the edges to perform a traversal on. The common graph representations are:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Adjacency matrix."),Object(n.b)("li",{parentName:"ul"},"Adjacency list."),Object(n.b)("li",{parentName:"ul"},"Hashmap of hashmaps.")),Object(n.b)("p",null,"A tree-like diagram could very well be a graph that allows for cycles and a naive recursive solution would not work. In that case you will have to handle cycles and keep a set of visited nodes when traversing."),Object(n.b)("h2",null,Object(n.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"graph-search-algorithms"})),Object(n.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#graph-search-algorithms"}),"#"),"Graph search algorithms:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Common")," - Breadth-first Search, Depth-first Search"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Uncommon")," - Topological Sort, Dijkstra's algorithm"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Rare")," - Bellman-Ford algorithm, Floyd-Warshall algorithm, Prim's algorithm, Kruskal's algorithm")),Object(n.b)("p",null,"In coding interviews, graphs are commonly represented as 2-D matrices where cells are the nodes and each cell can traverse to its adjacent cells (up/down/left/right). Hence it is important that you be familiar with traversing a 2-D matrix. When traversing the matrix, always ensure that your current position is within the boundary of the matrix and has not been visited before. "),Object(n.b)("p",null,"A simple template for doing depth-first searches on a matrix goes like this:"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-py"}),"def dfs(matrix):\n  # Check for an empty graph.\n  if not matrix:\n    return []\n\n  rows, cols = len(matrix), len(matrix[0])\n  visited = set()\n  directions = ((0, 1), (0, -1), (1, 0), (-1, 0))\n\n  def traverse(i, j):\n    if (i, j) in visited:\n      return\n\n    visited.add((i, j))\n    # Traverse neighbors.\n    for direction in directions:\n      next_i, next_j = i + direction[0], j + direction[1]\n      if 0 <= next_i < rows and 0 <= next_j < cols:\n        # Add in your question-specific checks.\n        traverse(next_i, next_j)\n\n  for i in range(rows):\n    for j in range(cols):\n      traverse(i, j)\n")),Object(n.b)("p",null,"A similar template for doing breadth-first searches on the matrix goes like this:"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-py"}),"from collections import deque\n\ndef bfs(matrix):\n  # Check for an empty graph.\n  if not matrix:\n    return []\n\n  rows, cols = len(matrix), len(matrix[0])\n  visited = set()\n  directions = ((0, 1), (0, -1), (1, 0), (-1, 0))\n\n  def traverse(i, j):\n    queue = deque([(i, j)])\n    while queue:\n      curr_i, curr_j = queue.pop()\n      if (curr_i, curr_j) not in visited:\n        visited.add((curr_i, curr_j))\n        # Traverse neighbors.\n        for direction in directions:\n          next_i, next_j = curr_i + direction[0], curr_j + direction[1]\n          if 0 <= next_i < rows and 0 <= next_j < cols:\n            # Add in your question-specific checks.\n            queue.append((next_i, next_j))\n\n  for i in range(rows):\n    for j in range(cols):\n      traverse(i, j)\n")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"NOTE: While DFS is implemented using recursion in this sample, it could also be implemented iteratively similar to BFS. The key difference between the algorithms lies in the underlying data structure (BFS uses a queue while DFS uses a stack). The ",Object(n.b)("inlineCode",{parentName:"p"},"deque")," class in Python can function as both a stack and a queue")),Object(n.b)("p",null,"For additional tips on BFS and DFS, you can refer to this ",Object(n.b)("a",r({parentName:"p"},{href:"https://leetcode.com/problems/pacific-atlantic-water-flow/discuss/90774/Python-solution-with-detailed-explanation"}),"LeetCode post")),Object(n.b)("h2",null,Object(n.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"corner-cases"})),Object(n.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#corner-cases"}),"#"),"Corner cases"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Empty graph"),Object(n.b)("li",{parentName:"ul"},"Graph with one or two nodes"),Object(n.b)("li",{parentName:"ul"},"Disjoint graphs"),Object(n.b)("li",{parentName:"ul"},"Graph with cycles")),Object(n.b)("h2",null,Object(n.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"recommended-leetcode-questions"})),Object(n.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#recommended-leetcode-questions"}),"#"),"Recommended Leetcode questions"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"https://leetcode.com/problems/clone-graph/"}),"Clone Graph")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"https://leetcode.com/problems/course-schedule/"}),"Course Schedule")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"https://leetcode.com/problems/pacific-atlantic-water-flow/"}),"Pacific Atlantic Water Flow")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"https://leetcode.com/problems/number-of-islands/"}),"Number of Islands")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"https://leetcode.com/problems/longest-consecutive-sequence/"}),"Longest Consecutive Sequence")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"https://leetcode.com/problems/alien-dictionary/"}),"Alien Dictionary (Leetcode Premium)")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"https://leetcode.com/problems/graph-valid-tree/"}),"Graph Valid Tree (Leetcode Premium)")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/"}),"Number of Connected Components in an Undirected Graph (Leetcode Premium)"))),Object(n.b)("h2",null,Object(n.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"more-questions"})),Object(n.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#more-questions"}),"#"),"More questions"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Given a list of sorted words from an alien dictionary, find the order of the alphabet.",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Alien Dictionary Topological Sort question."))),Object(n.b)("li",{parentName:"ul"},"Find if a given string matches any path in a labeled graph. A path may contain cycles."),Object(n.b)("li",{parentName:"ul"},"Given a bipartite graph, separate the vertices into two sets."),Object(n.b)("li",{parentName:"ul"},"You are a thief trying to sneak across a rectangular 100 x 100m field. There are alarms placed on the fields and they each have a circular sensing radius which will trigger if anyone steps into it. Each alarm has its own radius. Determine if you can get from one end of the field to the other end."),Object(n.b)("li",{parentName:"ul"},"Given a graph and two nodes, determine if there exists a path between them."),Object(n.b)("li",{parentName:"ul"},"Determine if a cycle exists in the graph.")))}h.isMDXComponent=!0}}]);