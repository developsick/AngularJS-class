# Single Page Web Applications with AngularJS(Coursera)
(course github : https://github.com/jhu-ep-coursera/fullstack-course5/)
# WEEK1

## 1. MVVM pattern
 - Model(javascript) - data / business logic
   * represents and holds raw data
   * some of hits data may be displayed in the view
   * can also cantain logic to retriece the data from some source
   * contains no logic  associated w/ displaying the model
 - View(html, css) - UI / presentation
   * user interface
   * only display the data that is given
   * never changes the data
   * declaratively broadcasts events, but never handles them
 - ViewModel(javascript) - presentation logic
   * representation of the state of the view
   * responds to view events, aka presentation logic
   * calls other functionality for business logic processing
   * never directly asks the view to display anything
## 2. Declarative binder
 - declaratively binds the model of the viewmodel to the view
 - declaratively means you don'y have to write any code(the framework does this thing)
 - key enabler of the whole MVVM pattern

## 3. Dependency Injection (DI)
 - design pattern that implements incersion of control for resolving dependencies
 - client gets called with eht dependendy by some system
 - client is not responsible for instantiate the dependency
 - (don't call us, we'll call you)

## 4. Minification
 - process of removing all unnecessary characters from source code without changing its functionality
 - DI(Dependency Infection) in Angular needs to be minification proof
 - 2 methods are:
   *  inline array with function as last element
   *  attach $inject property to the function object

## 5. Expression : {{exp}}
 - something that evaluates to some value
   * processed by Angular & roughly similar to the result of eval(some_js)
   * executed in the context of the scope & has access to properties on $scope
   * doesn't throw errors if it results in a TypeError or ReferenceError
   * control flow functions (ex. 'if' statements ) are not allowed
   * accept a filter or a filter chain to format the output

## 6. Interpolation
 - process of evaluating a string literal containing one or more placeholders, which are replaced with values
   * in Angular, this string :
     + Messege is {{ messege }}
   * (provided messege = "hello") is interpolated into this string :
     + Messege is hello
 - still connected to the original messege property
   * if $scope.messege changes, so will interpolation result


# WEEK2

## 1. Filter Function
 - define filter factory function
 - register filter factory with module
 - (javascript) inject it with nameFilter