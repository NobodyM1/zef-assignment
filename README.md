# ZEF Assignment

### Setting up development environment

  - npm install -g angular-cli

### Required editor plugins for consistency

  - tslint (tslint.json)
  - stylelint (stylelint.json)
  - editorconfig (.editorconfig)

### Best practices for GIT version control

  - Add a new tag with format of `v<major>.<minor>.<patch>` when deploying a new release

  - Use one short sentence as a commit message (start with upper case letter, no dot at the end)

	> Fixed typo in the readme file

  - If more complex explanation is really needed for the commit then add a body to the commit message

	> Fixed nasty bug in app listing
	>
	> When app had a scandic letters in its name the whole list got broken. This was due to our simple
	> hack that we use to migrate old apps.

  - Implement every feature (Trello card) in its own separate branch named as `feature-<Trello card id>` (feature branching)

  For many small features that are more easy to implement in the same branch you can combine the cards into one single card with checklist item for each of the separate card.

  - When a feature (Trello card) is ready move it to 'Ready for Testing' list and add label 'Waiting for merging' (substitute for pull request)

  Before doing this merge the latest changes from master branch and make sure that everything works. Also make a quick code review through 'git diff' against master for spotting left over code or accidental formatting mistakes such as EOL or empty line changes due to wrong editor configuration etc.

  - Before every Scrum meeting merge all your ready / waiting for merge feature brances into `testing` branch and deploy it to the devel environment.

### Best practices for coding with Angular 2

  - In short do not just produce code blindly, but also think of the readability of the code by structuring it sensibly, using enough spacing and using short but understandable variable / function names

  Structure your code primarily according to some logic (order of inheritance, order of use, relevance, type, etc.) and secondarily alphabetically. Having some logic behind structuring the code will always make it more readable to others and things can be find more quickly. Use empty lines to separate logical components and to make your code more readable. Naturally there is no golden rule for the structuring your code that would be easy to define / describe and would fit every situation, but as long as you use some logic it is more easy to others to pick up on your code. Below you can find some examples how to do the structuring via grouping logical parts together and separating the logical sections with empty lines.

  - Grouping of imports: Core libraries, angular libraries, angular material libraries, other libraries, application files in current folder, other application files. The imported objects should also be ordered if possible with some logic. If no logic exists or the objects share the same logic then you should order those alphabetically.

  ```
    import { Observable } from "rxjs/Observable";

    import { Component, OnInit, OnDestroy } from '@angular/core';
    import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

    import { MdButton } from '@angular2-material/button';
    import { MdSlider } from '@angular2-material/slider';

    import { SwiperViewComponent, SwiperItemComponent } from 'angular2-swiper-wrapper';

    import { AppComponent } from './app/app.component';

    import { SomeService } from '../shared/services/some.service';
  ```

  - Grouping of object properties: public properties, private properties, input properties, output properties, other decorated properties

  ```
    public name: string = '';

    private group: string = '';
    private label: string = '';

    @Input() id: string = '';
    @Input() gid: string = '';

    @Input()
    get username(): string {
      return this.name;
    }
    set username(name: string) {
      this.name = name;
    }

    @Output() fullname = new EventEmitter<string>();

    @ViewChild('button') button: CoolButtonComponent;
  ```

  - Also to get good quality code you should take full advantage of the Typescript features by defining your variables as public or private, defining the types of the variables and when it makes sense set sensible default value

  - Grouping of object functions: Constructor, interface functions, public api functions, utility / helper functions, event handling functions

  ```
    constructor() {}

    ngOnInit() {}

    ngOnDestroy() {}

    setViewIndex(index: number) {}

    onTabSelected(event: any, tab: string) {}

    onLinkClicked(event: any, link: string) {}
  ```

  - Order of function parameters should come naturally based on the importance of the parameters (most relative first and the obsolete parameters as last)

  - Also structure the actual code lines with empty lines and spaces (after control statements: if, for, while, etc. and before brackets / type definitions)

  ```
    someFunction(variable: string): boolean {
      let retVal: boolean = false;

      if (variable === true) {
         retVal = true;
      } else {
        retVal = false;
      }

      return retVal;
    }
  ```

  - Also always use brackets with control statements unless the code regarding the statement is on a single line (if possible avoid the single line control statements since they rarely make the code more readable)

  - Structure HTML attributes with the following logic: #ids, *directives, normal attributes, inputs, outputs, models

  ```
    <input *ngIf="show" class="container" [value]="value" (change)="onInputChange($event)"></input>
  ```

  - Structure CSS / SCSS style declarations according to idiomatic ordering (https://github.com/necolas/idiomatic-css#declaration-order): Positioning, display & box model, other

  ```
    .selector {
      position: absolute;
      z-index: 10;
      top: 0;

      display: inline-block;
      overflow: hidden;
      box-sizing: border-box;
      width: 100px;
      height: 100px;
      padding: 16px;
      border: 1px solid #000;
      margin: 16px;

      color: #fff;
      background: #000;
      font-size: 32px;
      font-family: 'Open Sans';
      text-align: center;
    }
  ```

  - To create new components, services, pipes etc. use the angular-cli tool and for the directory structure use + as prefix for routes and place components / services / pipes / models / etc. that are used by multiple components into shared folder

### Naming conventions within the project

  - Components (< id >.component.ts):

  ```
    <name>App        HomeApp           home-app
    <name>View       MainView          main-view
    <name>Pane       DetailPane        detail-pane
    <name>Card       AnalyzeCard       analyze-card
    <name>Bar        NavBar            nav-bar
    <name>Menu       MainMenu          main-menu
    <name>List       MasterList        master-list
    <name>Panel      PublisherPanel    publisher-panel

    Panel, Gallery, Translator (Shared components)
  ```

  - Services (< name >-< type >.service.ts):

  ```
    <name>Api        FlickrApi         API service
    <name>Bus        MessageBus        Relays data
    <name>State      RouterState       Router data
    <name>Logger     ActivityLogger    Logging service
    <name>Resolve    SurveyResolve     Resolve service
    <name>Manager    AuthManager       Manager service
  ```

  - Models (< name >.model.ts can hold any of the below):

  ```
    <name>Data       SurveyData        Data object
    <name>List       FilesList         List of objects
  ```

  - Guards (< name >.guard.ts can hold any of the below):

  ```
    <name>Check      AuthCheck         Check if ok to load or not
    <name>Required   AuthRequired      Redirects if condition not ok
  ```

  - Pipes (< action >-< target >.pipe.ts):

  ```
    <Action><Target>    CapitalizeText
  ```

  - Enums (< type >.enum.ts):

  ```
    <Type>              Events
  ```

  - Variables:

  ```
    open                Component flags
    visible             Component flags
    toolbar             Component flags

    routeSub            Subscriptions etc.
    selectedTab         State info etc.
    questionsList       List of data etc.
  ```

### Additions into the Firebase database

  - First add a documentation into the src/app/shared/models/README.md file and then verify the structure from the CA

### Documentating the code and README files

  - Document all classes with 1-3 short sentences by using TypeDoc format

  - Document all functions with 1-3 short sentences and parameters by using TypeDoc format

  ```
    /**
     * This can be used to resolve UI state data in the routes.
     */

    /**
     * This function is run when login button is clicked.
     * @param event  Comment for the parameter 'event'.
     * @returns      Comment for the return value.
     */
  ```

  - In addition for all shared components etc. add short usage info / data descriptions into the README.md file in the same folder with API Blueprint / Markdown language

  ```
    # Component name - Very short description

    + Inputs

      + name: string = '';
      + disabled: boolean = false;

    + Outputs

      + onChange({name: <name: string>, checked: <checked: boolean>});

    ## Code example

    ` ` `html
      <component class="checkbox" [disabled]="false"></component>
    ` ` `
  ```

### Temporal / personal extra documentation

  - You can add TODO comments for tasks that needs to be done later:

  ```
    // TODO: Finish this later once this bug is resolved:
    // https://github.com/some-project/issues/123456
  ```

  - For temporal development notes for yourself / other use NOTE comments:

  ```
    // NOTE: There might be better way to do this, but for now this works
  ```

  - For cards which have 'Needs some fixes' label there are FIXME comments:
  ```
    // FIXME: This needs to use resolve data instead of the manual service
  ```

