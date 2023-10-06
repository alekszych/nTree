# Low poly tree generator

## Dna of a tree

```
"#6e3b1c&0.7&0.83&0.16|0|0|61.4,0|1.3|0|29.45,0.42|2.6|0|23.25,0.17|4|0|88.68^#91b341&4.2|3|2|x|y|z|0,4|2|2.8|x|y+2|z|5,4|2|2.8|x|y+4|z|0,4|2|2.8|x|y+6|z|0"

#6e3b1c &  ->  trunk color 
0.7 &  ->  trunk width 
0.83 &  ->  trunk shrink
	0.16|0|0|61.4,  ->  segment 1 of the trunk (x, y, z, seed) 
	0|1.3|0|29.45,  ->  segment 2 of the trunk (x, y, z, seed)
	0.42|2.6|0|23.25,  ->  segment 3 of the trunk (x, y, z, seed)
	0.17|4|0|88.68  ->  segment 4 of the trunk (x, y, z, seed)
^
#91b341 &  ->  tree top color
3 &  ->  tip height
0.3 &  ->  offsetX of the tip
0.3 &  ->  offsetZ of the tip
	4.2|2.8|0,  ->  segment 1 of the treetop (bottom radius, top radius, heigth, y axis rotation)
	4|2|2.8|5,  ->  segment 2 of the treetop (bottom radius, top radius, heigth, y axis rotation)
	3.8|2|0,  ->  segment 3 of the treetop (bottom radius, top radius, heigth, y axis rotation)
	3.6|2|0  ->  segment 4 of the treetop (bottom radius, top radius, heigth, y axis rotation)
```
