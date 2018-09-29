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
 - steps to create a custom filter
   * define filter factory function
   * register filter factory with module
 - to use custom filter in Javascript
   * inject filter function registeredNameFilter into controller
 - to use in HTML : no need to inject into controller
   * {{ expression | registeredName }}
 - extra arguments can be supplied to the filter function
   * otherwise, steps are the same for registration & injection
 - to use in HTML with extra arguments
   * {{ expression | registeredName : arg1, arg2... }}
 - to user filter chaining
   * {{ expression | filter1 | filter2 ... }}
   * result of the filter1 becomes to an input of filter2

## 2. Digest Cycles
 - digest cycle : running digest loops until all watchers report that nothing has changed
   * dirty checking
 - several ways to set up watchers:
   * $scope.$watch : bad way(because controllers and templates have their own ways to deal with watchers and set them up)
   * {{ someProperty }}
   * <input ... ng-model="someProperty" ...>
 - only applied to things done inside of the Angular context
 - digest cycle does not get triggered automatically if events are unaware of Angular
 - solution:
   * call $digest after custom code (bad way)
   * wrap custom code inside of $apply
   * find angular specific service that handles the same functionality (ex: $timeout)

## 3. Data Binding
 - 2-way binding (ng-model) means:
   * listener for change on input automatically set up by Angular updates property value on $scope
   * direct update to property value is automatically updated in UI
 - 1-way binding ( {{ property }} ) means:
   * direct update to property value is updated in UI
 - 1-time binding ( {{ ::property }} ) means:
   * initialized value of property is automatically updated in UI
   * watcher for property is removed, so UI never again gets updated

## 4. NG-REPEAT
 - ng-repeat is a directive that extends the functionality of HTML elements it's applied to
   * behaves very similarily to for-each construct
 - ng-repeat="item in collection", where item can now be used in interpolation as an item in the collection at particular index of iteration
 - ng-repeat exposes a special $index property to the body of its host tag
   * holds the numeric index of the current item in the loop
 - Array has a special function called filter
   * create new array where each item satisfies some condition of the comparison function passed into the filter function
 - Angular has a special filter called 'filter'
   * provided a string as first argument, it will filter array it's applied to, matching all string items against the provided one
 - ng-repeat="item on collection | filter : searchString"


