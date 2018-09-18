# Single Page Web Applications with AngularJS(Coursera)
(course github : https://github.com/jhu-ep-coursera/fullstack-course5/)
# WEEK1
##1. MVVM pattern
### Model(javascript) - data / business logic
 - represents and holds raw data
 - some of hits data may be displayed in the view
 - can also cantain logic to retriece the data from some source
 - contains no logic  associated w/ displaying the model
### View(html, css) - UI / presentation
 - user interface
 - only display the data that is given
 - never changes the data
 - declaratively broadcasts events, but never handles them
### ViewModel(javascript) - presentation logic
 - representation of the state of the view
 - responds to view events, aka presentation logic
 - calls other functionality for business logic processing
 - never directly asks the view to display anything
### Declarative binder 
 - declaratively binds the model of the viewmodel to the view
 - declaratively means you don'y have to write any code(the framework does this thing)
 - key enabler of the whole MVVM pattern

##2. Dependency Injection (DI)
 - design pattern that implements incersion of control for resolving dependencies
 - client gets called with eht dependendy by some system
 - client is not responsible for instantiate the dependency
 - (don't call us, we'll call you)