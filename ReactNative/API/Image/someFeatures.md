# Styling Images
1. resizeMode :
- cover(default) : it also keeps the aspect ratio but doesn't necessarily shrink the image to fit into this box, instead /*/*/*it just the crops the image/*/*/* beyond the boundaries of the access it would exceed otherwise
- contain : if you don't want to crop it(overflow image) like cover
- stretch : learn yourself
2. The '-View-' could not use the width of its child(i.e. the '-Image-') because that child had a relative width of 80%
- style props : 'overflow' : It can treat the remainder that go beyond the limit of a scale
3. In android, style-props, a circle modle should be created by a formula (Circle =>  width=hegiht & borderRadius = width / 2)

# Working with Network (Web) Images
- The fadeDuration ('-Image-' props)
: Adjust the duration of how long faded effect will last 
(faded effect : when a component is loading)