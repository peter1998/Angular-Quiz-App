// questions.ts
export const QUESTIONS = [
  {
    text: 'Which command is used to create a new Angular project?',
    choices: ['ng new', 'ng create', 'ng generate', 'ng start'],
    answer: 'ng new',
  },
  {
    text: 'What is a decorator in Angular?',
    choices: [
      'A CSS style',
      'A function that adds metadata to a class',
      'A type of component',
      'A service',
    ],
    answer: 'A function that adds metadata to a class',
  },
  {
    text: 'What is the purpose of an Angular service?',
    choices: [
      'To manage data and logic',
      'To create new components',
      'To add styles to the application',
      'To define routes',
    ],
    answer: 'To manage data and logic',
  },
  {
    text: 'What is the purpose of the ngOnInit lifecycle hook?',
    choices: [
      'It is called when a component is destroyed',
      'It is called before a component is rendered',
      'It is called when a component’s input properties change',
      'It is called after a component’s view (and child views) are fully initialized',
    ],
    answer:
      'It is called after a component’s view (and child views) are fully initialized',
  },
  {
    text: 'What is the purpose of the ngOnDestroy lifecycle hook?',
    choices: [
      'It is called when a component is destroyed',
      'It is called before a component is rendered',
      'It is called when a component’s input properties change',
      'It is called after a component’s view (and child views) are fully initialized',
    ],
    answer: 'It is called when a component is destroyed',
  },
  {
    text: 'What is the purpose of the ngOnChanges lifecycle hook?',
    choices: [
      'It is called when a component is destroyed',
      'It is called before a component is rendered',
      'It is called when a component’s input properties change',
      'It is called after a component’s view (and child views) are fully initialized',
    ],
    answer: 'It is called when a component’s input properties change',
  },
  {
    text: 'What is the purpose of the ngDoCheck lifecycle hook?',
    choices: [
      'It is called when a component is destroyed',
      'It is called after every run of change detection',
      'It is called when a component’s input properties change',
      'It is called after a component’s view (and child views) are fully initialized',
    ],
    answer: 'It is called after every run of change detection',
  },
  {
    text: 'What is the purpose of the ngAfterContentInit lifecycle hook?',
    choices: [
      'It is called when a component is destroyed',
      'It is called after Angular projects external content into the component’s view',
      'It is called when a component’s input properties change',
      'It is called after a component’s view (and child views) are fully initialized',
    ],
    answer:
      'It is called after Angular projects external content into the component’s view',
  },
  {
    text: 'What is the purpose of the ngAfterContentChecked lifecycle hook?',
    choices: [
      'It is called when a component is destroyed',
      'It is called after Angular checks the content projected into the component',
      'It is called when a component’s input properties change',
      'It is called after a component’s view (and child views) are fully initialized',
    ],
    answer:
      'It is called after Angular checks the content projected into the component',
  },
  {
    text: 'What is the purpose of the ngAfterViewInit lifecycle hook?',
    choices: [
      'It is called when a component is destroyed',
      'It is called after Angular initializes the component’s views and child views',
      'It is called when a component’s input properties change',
      'It is called after every run of change detection',
    ],
    answer:
      'It is called after Angular initializes the component’s views and child views',
  },
  {
    text: 'What is the purpose of the ngAfterViewChecked lifecycle hook?',
    choices: [
      'It is called when a component is destroyed',
      'It is called after Angular checks the component’s views and child views',
      'It is called when a component’s input properties change',
      'It is called after every run of change detection',
    ],
    answer:
      'It is called after Angular checks the component’s views and child views',
  },
  {
    text: 'What is the purpose of the ngOnDestroy lifecycle hook?',
    choices: [
      'It is called just before Angular destroys the directive/component',
      'It is called after Angular checks the component’s views and child views',
      'It is called when a component’s input properties change',
      'It is called after every run of change detection',
    ],
    answer: 'It is called just before Angular destroys the directive/component',
  },
  {
    text: 'What is Angular CLI?',
    choices: [
      'A command line interface for Angular',
      'A GUI for Angular',
      'A component in Angular',
      'A service in Angular',
    ],
    answer: 'A command line interface for Angular',
  },
  {
    text: 'What is the purpose of a pipe in Angular?',
    choices: [
      'To transform input values to output values for display',
      'To create new components',
      'To define routes',
      'To manage data and logic',
    ],
    answer: 'To transform input values to output values for display',
  },
  {
    text: 'What is the purpose of a module in Angular?',
    choices: [
      'To organize the application into cohesive blocks of functionality',
      'To create new components',
      'To define routes',
      'To manage data and logic',
    ],
    answer: 'To organize the application into cohesive blocks of functionality',
  },
  {
    text: 'What is the purpose of a component in Angular?',
    choices: [
      'To define a portion of the UI',
      'To organize the application into cohesive blocks of functionality',
      'To define routes',
      'To manage data and logic',
    ],
    answer: 'To define a portion of the UI',
  },
  {
    text: 'What is the purpose of a directive in Angular?',
    choices: [
      'To change the appearance or behavior of a DOM element',
      'To organize the application into cohesive blocks of functionality',
      'To define a portion of the UI',
      'To manage data and logic',
    ],
    answer: 'To change the appearance or behavior of a DOM element',
  },
  {
    text: 'What is the purpose of a service in Angular?',
    choices: [
      'To share data and functions across components',
      'To organize the application into cohesive blocks of functionality',
      'To define a portion of the UI',
      'To change the appearance or behavior of a DOM element',
    ],
    answer: 'To share data and functions across components',
  },
  {
    text: 'What is the purpose of a guard in Angular?',
    choices: [
      'To protect routes',
      'To share data and functions across components',
      'To define a portion of the UI',
      'To change the appearance or behavior of a DOM element',
    ],
    answer: 'To protect routes',
  },
  {
    text: 'What is the difference between a component and a directive in Angular?',
    choices: [
      'Components have a template, directives do not',
      'Directives have a template, components do not',
      'There is no difference',
      'Components are used for data binding, directives are not',
    ],
    answer: 'Components have a template, directives do not',
  },
  {
    text: 'What is the purpose of the "async" pipe?',
    choices: [
      'It subscribes to an Observable or Promise and returns the latest value',
      'It transforms input values to output values for display',
      'It is used for data binding',
      'It is used for dependency injection',
    ],
    answer:
      'It subscribes to an Observable or Promise and returns the latest value',
  },
  {
    text: 'What is "dependency injection" in Angular?',
    choices: [
      'A design pattern in which a class receives its dependencies from external sources',
      'A way to organize the application into cohesive blocks of functionality',
      'A way to define a portion of the UI',
      'A way to change the appearance or behavior of a DOM element',
    ],
    answer:
      'A design pattern in which a class receives its dependencies from external sources',
  },
  {
    text: 'What is the purpose of the "ngModel" directive?',
    choices: [
      'It is used for two-way data binding',
      'It is used for one-way data binding',
      'It is used to define a portion of the UI',
      'It is used to change the appearance or behavior of a DOM element',
    ],
    answer: 'It is used for two-way data binding',
  },
  {
    text: 'What is the purpose of the "ngIf" directive?',
    choices: [
      'It is used to conditionally include a template based on the value of an expression',
      'It is used for two-way data binding',
      'It is used to define a portion of the UI',
      'It is used to change the appearance or behavior of a DOM element',
    ],
    answer:
      'It is used to conditionally include a template based on the value of an expression',
  },
  {
    text: 'What is the purpose of the "ngFor" directive?',
    choices: [
      'It is used to repeat a portion of HTML template once per each item from an iterable list (Array)',
      'It is used for two-way data binding',
      'It is used to define a portion of the UI',
      'It is used to change the appearance or behavior of a DOM element',
    ],
    answer:
      'It is used to repeat a portion of HTML template once per each item from an iterable list (Array)',
  },
  {
    text: 'What is the purpose of the "ngSwitch" directive?',
    choices: [
      'It is used to add/remove DOM element(s) and is evaluated in terms of an expression',
      'It is used for two-way data binding',
      'It is used to define a portion of the UI',
      'It is used to change the appearance or behavior of a DOM element',
    ],
    answer:
      'It is used to add/remove DOM element(s) and is evaluated in terms of an expression',
  },
  {
    text: 'What is the purpose of the "ngClass" directive?',
    choices: [
      'It is used to dynamically add or remove CSS classes based on an expression',
      'It is used for two-way data binding',
      'It is used to define a portion of the UI',
      'It is used to change the appearance or behavior of a DOM element',
    ],
    answer:
      'It is used to dynamically add or remove CSS classes based on an expression',
  },
];
