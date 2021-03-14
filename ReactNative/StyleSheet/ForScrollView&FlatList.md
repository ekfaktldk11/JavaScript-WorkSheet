# ScrollView & Flexbox
1. /*contentContainerStyle/* (props in -ScrollView-, -FlatList-)
: For scroll view and for FlatList, you have that /*contentContainerStyle/* which you use to control the layout inside of that -ScrollView-

2. 'flexGrow(style props)'
- It makes sure that the item to which add this grows and takes up as much space as it can (go beyond the limit of a flex)(can access of boundaries)
- more flexible than flex
- If we use flex(not flexGrow) when i scroll the screen that early go beyonded of boundaries, the screen automatically get back to the normal screen(It shows the overflow screen just a moment when i am pulling down)