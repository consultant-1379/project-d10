/**
 * SurveyApp is defined as
 * `<e-survey-app>`
 *
 * Imperatively create application
 * @example
 * let app = new SurveyApp();
 *
 * Declaratively create application
 * @example
 * <e-survey-app></e-survey-app>
 *
 * @extends {App}
 */
import {
  App,
  html,
  definition
} from '@eui/app';
import style from './survey-app.css';
import {
  Wizard,
  Step
} from '@eui/layout';
import {
  Checkbox
} from '@eui/base';

export default class SurveyApp extends App {
  // Uncomment this block to add initialization code
  // constructor() {
  //   super();
  //   // initialize
  // }

  static get components() {
    return {
      // register components here
      'eui-wizard': Wizard,
      'eui-wizard-step': Step,
      'eui-checkbox': Checkbox,
    };
  }

  didConnect() {
    this.bubble('app:title', {
      displayName: 'Survey'
    });
    this.bubble('app:subtitle', {
      subtitle: 'Ericsson'
    });
  }



  // Process checkbox
  processCultureQuestion() {
    let step = this.shadowRoot.querySelector('#question1');
    const yes = this.shadowRoot.querySelector("#cultureC1");
    const no = this.shadowRoot.querySelector("#cultureC2");

    // Enable or disable step
    if (step.valid === true) {
      step.valid = false;
    } else {
      step.valid = true;
    }

    // Show or hide sub questions
    if (yes.checked === true) {
      this.cultureSubEnabled = false;
      this.cultureMain = true;
      // Disable other checkbox
      no.disabled = true;

    } else if (no.checked === true) {
      this.cultureSubEnabled = true;
      this.cultureMain = false;
      // Disable other checkbox
      yes.disabled = true;

    } else if (no.checked === false && yes.checked === false) {
      // Reset everything to default
      yes.disabled = false;
      no.disabled = false;
      this.cultureSubEnabled = false;
      step = false;
    }
  }

  processProductDesignQuestion() {
    let step = this.shadowRoot.querySelector('#question2');
    const yes = this.shadowRoot.querySelector('#productP1');
    const no = this.shadowRoot.querySelector('#productP2');

    // Enable or disable step
    if (step.valid === true) {
      step.valid = false;
    } else {
      step.valid = true;
    }

    // Show or hide sub questions
    if (yes.checked === true) {
      this.productDesignSubEnabled = false;
      this.productDesignMain = true;
      // Disable other checkbox
      no.disabled = true;

    } else if (no.checked === true) {
      this.productDesignSubEnabled = true;
      this.productDesignMain = false;
      // Disable other checkbox
      yes.disabled = true;

    } else if (no.checked === false && yes.checked === false) {
      // Reset everything to default
      yes.disabled = false;
      no.disabled = false;
      this.productDesignSubEnabled = false;
      step = false;
    }
  }

  processTeamQuestion() {
    let step = this.shadowRoot.querySelector('#question3');
    const yes = this.shadowRoot.querySelector('#teamT1');
    const no = this.shadowRoot.querySelector('#teamT2');

    // Enable or disable step
    if (step.valid === true) {
      step.valid = false;
    } else {
      step.valid = true;
    }

    // Show or hide sub questions
    if (yes.checked === true) {
      this.teamSubEnabled = false;
      this.teamMain = true;
      // Disable other checkbox
      no.disabled = true;

    } else if (no.checked === true) {
      this.teamSubEnabled = true;
      this.teamMain = false;
      // Disable other checkbox
      yes.disabled = true;

    } else if (no.checked === false && yes.checked === false) {
      // Reset everything to default
      yes.disabled = false;
      no.disabled = false;
      this.teamSubEnabled = false;
      step = false;
    }
  }

  processProcessQuestions() {
    let step = this.shadowRoot.querySelector('#question4');
    const yes = this.shadowRoot.querySelector('#processP1');
    const no = this.shadowRoot.querySelector('#processP2');

    // Enable or disable step
    if (step.valid === true) {
      step.valid = false;
    } else {
      step.valid = true;
    }

    // Show or hide sub questions
    if (yes.checked === true) {
      this.processSubEnabled = false;
      this.processMain = true;
      // Disable other checkbox
      no.disabled = true;

    } else if (no.checked === true) {
      this.processSubEnabled = true;
      this.processMain = false;
      // Disable other checkbox
      yes.disabled = true;

    } else if (no.checked === false && yes.checked === false) {
      // Reset everything to default
      yes.disabled = false;
      no.disabled = false;
      this.processSubEnabled = false;
      step = false;
    }
  }

  processArchitectureQuestions() {
    let step = this.shadowRoot.querySelector('#question5');
    const yes = this.shadowRoot.querySelector('#architectureA1');
    const no = this.shadowRoot.querySelector('#architectureA2');

    // Enable or disable step
    if (step.valid === true) {
      step.valid = false;
    } else {
      step.valid = true;
    }

    // Show or hide sub questions
    if (yes.checked === true) {
      this.architechtureSubEnabled = false;
      this.architectureMain = true;
      // Disable other checkbox
      no.disabled = true;

    } else if (no.checked === true) {
      this.architechtureSubEnabled = true;
      this.architectureMain = false;
      // Disable other checkbox
      yes.disabled = true;

    } else if (no.checked === false && yes.checked === false) {
      // Reset everything to default
      yes.disabled = false;
      no.disabled = false;
      this.architechtureSubEnabled = false;
      step = false;
    }
  }

  processMaintenanceQuestions() {
    let step = this.shadowRoot.querySelector('#question6');
    const yes = this.shadowRoot.querySelector('#maintenanceM1');
    const no = this.shadowRoot.querySelector('#maintenanceM2');

    // Enable or disable step
    if (step.valid === true) {
      step.valid = false;
    } else {
      step.valid = true;
    }

    // Show or hide sub questions
    if (yes.checked === true) {
      this.maintenanceSubEnabled = false;
      this.maintenanceMain = true;
      // Disable other checkbox
      no.disabled = true;

    } else if (no.checked === true) {
      this.maintenanceSubEnabled = true;
      this.maintenanceMain = false;
      // Disable other checkbox
      yes.disabled = true;

    } else if (no.checked === false && yes.checked === false) {
      // Reset everything to default
      yes.disabled = false;
      no.disabled = false;
      this.maintenanceSubEnabled = false;
      step = false;
    }
  }

  processDeliveryQuestions() {
    let step = this.shadowRoot.querySelector('#question7');
    const yes = this.shadowRoot.querySelector('#deliveryD1');
    const no = this.shadowRoot.querySelector('#deliveryD2');

    // Enable or disable step
    if (step.valid === true) {
      step.valid = false;
    } else {
      step.valid = true;
    }

    // Show or hide sub questions
    if (yes.checked === true) {
      this.deliverySubEnabled = false;
      this.deliveryMain = true;
      // Disable other checkbox
      no.disabled = true;

    } else if (no.checked === true) {
      this.deliverySubEnabled = true;
      this.deliveryMain = false;
      // Disable other checkbox
      yes.disabled = true;

    } else if (no.checked === false && yes.checked === false) {
      // Reset everything to default
      yes.disabled = false;
      no.disabled = false;
      this.deliverySubEnabled = false;
      step = false;
    }
  }

  processProvisioningQuestions() {
    let step = this.shadowRoot.querySelector('#question8');
    const yes = this.shadowRoot.querySelector('#provisioningP1');
    const no = this.shadowRoot.querySelector('#provisioningP2');

    // Enable or disable step
    if (step.valid === true) {
      step.valid = false;
    } else {
      step.valid = true;
    }

    // Show or hide sub questions
    if (yes.checked === true) {
      this.provisioningSubEnabled = false;
      this.provisioningMain = true;
      // Disable other checkbox
      no.disabled = true;

    } else if (no.checked === true) {
      this.provisioningSubEnabled = true;
      this.provisioningMain = false;
      // Disable other checkbox
      yes.disabled = true;

    } else if (no.checked === false && yes.checked === false) {
      // Reset everything to default
      yes.disabled = false;
      no.disabled = false;
      this.provisioningSubEnabled = false;
      step = false;
    }
  }

  processInfrastructureQuestions() {
    let step = this.shadowRoot.querySelector('#question9');
    const yes = this.shadowRoot.querySelector('#infrastructureI1');
    const no = this.shadowRoot.querySelector('#infrastructureI2');

    // Enable or disable step
    if (step.valid === true) {
      step.valid = false;
    } else {
      step.valid = true;
    }

    // Show or hide sub questions
    if (yes.checked === true) {
      this.infrastructureSubEnabled = false;
      this.infrastructureMain = true;
      // Disable other checkbox
      no.disabled = true;

    } else if (no.checked === true) {
      this.infrastructureSubEnabled = true;
      this.infrastructureMain = false;
      // Disable other checkbox
      yes.disabled = true;

    } else if (no.checked === false && yes.checked === false) {
      // Reset everything to default
      yes.disabled = false;
      no.disabled = false;
      this.infrastructureSubEnabled = false;
      step = false;
    }
  }

  processSubQuestions(val) {
    switch (val) {
      case 1.1:
        if (this.c1 === true) {
          this.c1 = false;
        } else {
          this.c1 = true;
        }
        break;
      case 1.2:
        if (this.c2 === true) {
          this.c2 = false;
        } else {
          this.c2 = true;
        }
        break;
      case 1.3:
        if (this.c3 === true) {
          this.c3 = false;
        } else {
          this.c3 = true;
        }
        break;
      case 1.4:
        if (this.c4 === true) {
          this.c4 = false;
        } else {
          this.c4 = true;
        }
        break;

      case 2.1:
        if (this.p1 === true) {
          this.p1 = false;
        } else {
          this.p1 = true;
        }
        break;
      case 2.2:
        if (this.p2 === true) {
          this.p2 = false;
        } else {
          this.p2 = true;
        }
        break;
      case 2.3:
        if (this.p3 === true) {
          this.p3 = false;
        } else {
          this.p3 = true;
        }
        break;
      case 2.4:
        if (this.p4 === true) {
          this.p4 = false;
        } else {
          this.p4 = true;
        }
        break;
      case 3.1:
        if (this.t1 === true) {
          this.t1 = false;
        } else {
          this.t1 = true;
        }
        break;
      case 3.2:
        if (this.t2 === true) {
          this.t2 = false;
        } else {
          this.t2 = true;
        }
        break;
      case 3.3:
        if (this.t3 === true) {
          this.t3 = false;
        } else {
          this.t3 = true;
        }
        break;
      case 3.4:
        if (this.t4 === true) {
          this.t4 = false;
        } else {
          this.t4 = true;
        }
        break;
      case 4.1:
        if (this.pr1 === true) {
          this.pr1 = false;
        } else {
          this.pr1 = true;
        }
        break;
      case 4.2:
        if (this.pr2 === true) {
          this.pr2 = false;
        } else {
          this.pr2 = true;
        }
        break;
      case 4.3:
        if (this.pr3 === true) {
          this.pr3 = false;
        } else {
          this.pr3 = true;
        }
        break;
      case 4.4:
        if (this.pr4 === true) {
          this.pr4 = false;
        } else {
          this.pr4 = true;
        }
        break;
      case 5.1:
        if (this.a1 === true) {
          this.a1 = false;
        } else {
          this.a1 = true;
        }
        break;
      case 5.2:
        if (this.a2 === true) {
          this.a2 = false;
        } else {
          this.a2 = true;
        }
        break;
      case 5.3:
        if (this.a3 === true) {
          this.a3 = false;
        } else {
          this.a3 = true;
        }
        break;
      case 5.4:
        if (this.a4 === true) {
          this.a4 = false;
        } else {
          this.a4 = true;
        }
        break;
      case 6.1:
        if (this.m1 === true) {
          this.m1 = false;
        } else {
          this.m1 = true;
        }
        break;
      case 6.2:
        if (this.m2 === true) {
          this.m2 = false;
        } else {
          this.m2 = true;
        }
        break;
      case 6.3:
        if (this.m3 === true) {
          this.m3 = false;
        } else {
          this.m3 = true;
        }
        break;
      case 6.4:
        if (this.m4 === true) {
          this.m4 = false;
        } else {
          this.m4 = true;
        }
        break;
      case 7.1:
        if (this.d1 === true) {
          this.d1 = false;
        } else {
          this.d1 = true;
        }
        break;
      case 7.2:
        if (this.d2 === true) {
          this.d2 = false;
        } else {
          this.d2 = true;
        }
        break;
      case 7.3:
        if (this.d3 === true) {
          this.d3 = false;
        } else {
          this.d3 = true;
        }
        break;
      case 7.4:
        if (this.d4 === true) {
          this.d4 = false;
        } else {
          this.d4 = true;
        }
        break;
      case 8.1:
        if (this.prov1 === true) {
          this.prov1 = false;
        } else {
          this.prov1 = true;
        }
        break;
      case 8.2:
        if (this.prov2 === true) {
          this.prov2 = false;
        } else {
          this.prov2 = true;
        }
        break;
      case 8.3:
        if (this.prov3 === true) {
          this.prov3 = false;
        } else {
          this.prov3 = true;
        }
        break;
      case 8.4:
        if (this.prov4 === true) {
          this.prov4 = false;
        } else {
          this.prov4 = true;
        }
        break;
      case 9.1:
        if (this.i1 === true) {
          this.i1 = false;
        } else {
          this.i1 = true;
        }
        break;
      case 9.2:
        if (this.i2 === true) {
          this.i2 = false;
        } else {
          this.i2 = true;
        }
        break;
      case 9.3:
        if (this.i3 === true) {
          this.i3 = false;
        } else {
          this.i3 = true;
        }
        break;
      case 9.4:
        if (this.i4 === true) {
          this.i4 = false;
        } else {
          this.i4 = true;
        }
        break;
      default:
      // code block
    }
  }

  createJSON = () => {

    const xmlhttp = new XMLHttpRequest();
    const url = "http://localhost:9090/survey/";

    const json = {
      "questions": [this.cultureMain, this.productDesignMain, this.teamMain, this.processMain, this.architectureMain, this.maintenanceMain, this.deliveryMain, this.provisioningMain, this.infrastructureMain],
      "subQuestions": [
        [this.c1, this.c2, this.c3, this.c4],
        [this.p1, this.p2, this.p3, this.p4],
        [this.t1, this.t2, this.t3, this.t4],
        [this.pr1, this.pr2, this.pr3, this.pr4],
        [this.a1, this.a2, this.a3, this.a4],
        [this.m1, this.m2, this.m3, this.m4],
        [this.d1, this.d2, this.d3, this.d4],
        [this.prov1, this.prov2, this.prov3, this.prov4],
        [this.i1, this.i2, this.i3, this.i4]
      ],
    };

    xmlhttp.open("POST", url, true);
    xmlhttp.setRequestHeader("Content-Type", "application/json");
    xmlhttp.send(JSON.stringify(json));

    //Create table
    this.createTable();
  }

  createTable() {
    //Show div with table
    this.resultDiv = true;


    setTimeout(function () {
      $.ajax({
        type: "GET",
        url: 'http://localhost:9090/survey/1',
        dataType: 'json',

        success: function (response) {
          console.table([response]);

        }
      });
    }, 2000);


  }

  /**
   * Render the <e-survey-app> app. This function is called each time a
   * prop changes.
   */
  render() {
    return html`
    <eui-wizard
      id="wizard"
      @eui-wizard:next=${this.nextClick}
      @eui-wizard:finish=${this.createJSON}
    >
      <eui-wizard-step valid step-title="Welcome">
        <div>
        <h1>Welcome</h1>
          <h2>This is a Cloud Maturity Matrix Survey.</h2>
          <h2>You will be asked a a total of 9 questions.</h2>
          <h2>Each question has 4 sub questions which you will only be asked these if your answer is "No" to the main question.</h2>
          <h2>Click the "Next" button bellow to begin!</h2>
        </div>
      </eui-wizard-step>

      <!--CULTURE ----------------------------------------------------------------------->
      <eui-wizard-step step-title="Culture" id="question1">
          <p>
            1. Do you have a collaborative culture (e.g. big but not specific/highly detailed goals with no
            fixed delivery dates)?
          </p>
          <eui-checkbox name="cultureC1" id="cultureC1" @change="${() => this.processCultureQuestion()}">Yes</eui-checkbox>
          <eui-checkbox name="cultureC2" id="cultureC2" @change="${() => this.processCultureQuestion()}">No</eui-checkbox>

          <br>
          <div id="cultureSubQ" style="display:${this.cultureSubEnabled ? 'block' : 'none'}">
            <h3>In our company</h3>
            <p>
              1. Project managers coordinate between all the different
              teams working on the same project, and the teams have
              highly specialised responsibilities.
            </p>
            <eui-checkbox name="cultureC1" @change="${(val) => this.processSubQuestions(1.1)}">Yes</eui-checkbox>

            <p>
              2. Our development teams focus on achieving small,
              defined objectives quickly and then moving immediately
              to the next one.
            </p>
            <eui-checkbox name="cultureC1" @change="${(val) => this.processSubQuestions(1.2)}">Yes</eui-checkbox>

            <p>
              3. A lot of up-front planning goes into documenting each
              step of a project before it even begins.
            </p>
            <eui-checkbox name="cultureC1" @change="${(val) => this.processSubQuestions(1.3)}">Yes</eui-checkbox>

            <p>
              4. Each team contain a mix of members whose different
              areas of expertise cover the full spectrum of skills needed
              for crafting a releasable increment
            </p>
            <eui-checkbox name="cultureC1" @change="${(val) => this.processSubQuestions(1.4)}">Yes</eui-checkbo>

          </div>
      </eui-wizard-step>

      <!--PROD/SERVICE DESIGN ----------------------------------------------------------------------->
      <eui-wizard-step step-title="Product/Service Design" id="question2">
        <p>
          2. Is your product and design data driven
          – that is they are rapidly prototyped, deployed and
          evaluated based on real customer usage before deciding on further development or retirement)
        </p>
        <eui-checkbox name="productP1" id="productP1" @change="${() => this.processProductDesignQuestion()}">Yes</eui-checkbox>
        <eui-checkbox name="productP2" id="productP2" @change="${() => this.processProductDesignQuestion()}">No</eui-checkbox>

        <br>

        <div id="cultureSubQ" style="display:${this.productDesignSubEnabled ? 'block' : 'none'}">
            <h3>In our company</h3>
            <p>
              1. We have product roadmaps spanning months or even
              years into the future. Our releases typically happen every
              six months to one year, sometimes even longer.
            </p>
            <eui-checkbox name="productP1" @change="${(val) => this.processSubQuestions(2.1)}">Yes</eui-checkbox>

            <p>
              2. There is pressure to deliver features, fast, and releases
              happen on a regular planned basis. (For example, ‘We’ll
              Feature X in two months, Feature Y in four months and
              Feature Z in six months’—with no deviation from the
              schedule).
            </p>
            <eui-checkbox name="productP1" @change="${(val) => this.processSubQuestions(2.2)}">Yes</eui-checkbox>

            <p>
              3. We release large sets of related features all at once as
              comprehensive updates.
            </p>
            <eui-checkbox name="productP1" @change="${(val) => this.processSubQuestions(2.3)}">Yes</eui-checkbox>

            <p>
              4. Our releases are usually small-scale iterative changes to
              existing features/services.
            </p>
            <eui-checkbox name="productP1" @change="${(val) => this.processSubQuestions(2.4)}">Yes</eui-checkbo>

          </div>
      </eui-wizard-step>

      <!--TEAM ----------------------------------------------------------------------->
      <eui-wizard-step step-title="Team" step-title="Team" id="question3">
        <p>
          3. Are teams Devops teams that is self contained teams responsible
          for all development and
          deployment to production and production is monitored by SRE teams?
          No then pdf questions
        </p>
        <eui-checkbox name="teamT1" id="teamT1" @change="${() => this.processTeamQuestion()}">Yes</eui-checkbox>
        <eui-checkbox name="teamT2" id="teamT2" @change="${() => this.processTeamQuestion()}">No</eui-checkbox>

        <br>

        <div id="cultureSubQ" style="display:${this.teamSubEnabled ? 'block' : 'none'}">
            <h3>In our company</h3>
            <p>
              1. All decisions are made by managers, and teams must
              seek permission before changing any part of the project
              plan, no matter how small.
            </p>
            <eui-checkbox name="productP1" @change="${(val) => this.processSubQuestions(3.1)}">Yes</eui-checkbox>

            <p>
              2. Applications are developed as several large components,
              with one team per component fully and vertically
              responsible for the build.
            </p>
            <eui-checkbox name="productP1" @change="${(val) => this.processSubQuestions(3.2)}">Yes</eui-checkbox>

            <p>
              3. We have separate teams of specialists to handle different
              areas: design, architecture, security, testing, etc. When
              our team’s piece of a project is finished, we hand it off to
              the next team.
            </p>
            <eui-checkbox name="productP1" @change="${(val) => this.processSubQuestions(3.3)}">Yes</eui-checkbox>

            <p>
              4. Our teams are mixed: We have developers, QA/testing,
              someone with server experience, etc. all in one group. We
              don’t talk to other teams very much since our teams are
              meant to be self-sufficient and independent.
            </p>
            <eui-checkbox name="productP1" @change="${(val) => this.processSubQuestions(3.4)}">Yes</eui-checkbo>

          </div>
      </eui-wizard-step>

      <!--PROCESS ----------------------------------------------------------------------->
      <eui-wizard-step step-title="Process" id="question4">
        <p>
          4. Do you use research and experimentation techniques for large and complex problems
          - using lots of proof of concepts to compare o
          ptions, using Kanban to clarify the project then Agile
          methods like Scrum once problem is well understood?
        </p>

        <eui-checkbox name="processP1" id="processP1" @change="${() => this.processProcessQuestions()}">Yes</eui-checkbox>
        <eui-checkbox name="processP2" id="processP2" @change="${() => this.processProcessQuestions()}">No</eui-checkbox>

        <br>

        <div id="cultureSubQ" style="display:${this.processSubEnabled ? 'block' : 'none'}">
            <h3>In our company</h3>
            <p>
              1. We do all our planning up front, and then hand off to
              teams for execution. Managers handle the collaboration
              and communication between our teams.
            </p>
            <eui-checkbox name="productP1" @change="${(val) => this.processSubQuestions(4.1)}">Yes</eui-checkbox>

            <p>
              2. A team will work on one small, defined project and deliver
              it in two to four weeks. If a new feature request comes in
              the middle of a delivery cycle, we may or may not be able
              to add it in.
            </p>
            <eui-checkbox name="productP1" @change="${(val) => this.processSubQuestions(4.2)}">Yes</eui-checkbox>

            <p>
              3. A team will work on one small, defined project and deliver
              it in two to four weeks. If a new feature request comes in
              the middle of a delivery cycle, we may or may not be able
              to add it in.
            </p>
            <eui-checkbox name="productP1" @change="${(val) => this.processSubQuestions(4.3)}">Yes</eui-checkbox>

            <p>
              4. If we can’t coordinate or fix an issue on the last day or two
              of a production cycle, we can’t ship—so when a bug or
              some other problem pops up it’s hard to do anything more
              than a quick fix. (Following up to address an issue in more
              depth requires a dedicated sprint so we can focus on it).
            </p>
            <eui-checkbox name="productP1" @change="${(val) => this.processSubQuestions(4.4)}">Yes</eui-checkbo>

          </div>
      </eui-wizard-step>

      <!--ARCHITECHTURE ----------------------------------------------------------------------->
      <eui-wizard-step step-title="Architechture" id="question5">
        <p>
          5. Do you have a microprocessor architecture built from independently deployable services?
        </p>

        <eui-checkbox name="architectureA1" id="architectureA1" @change="${() => this.processArchitectureQuestions()}">Yes</eui-checkbox>
        <eui-checkbox name="architectureA2" id="architectureA2" @change="${() => this.processArchitectureQuestions()}">No</eui-checkbox>

        <br>

        <div id="cultureSubQ" style="display:${this.architechtureSubEnabled ? 'block' : 'none'}">
            <h3>In our company</h3>
            <p>
              1. Our system is very big. Few people understand the
              whole thing. We fear the domino effect: If you change
              something, you have to be very careful because it could
              break something else..
            </p>
            <eui-checkbox name="productP1" @change="${(val) => this.processSubQuestions(5.1)}">Yes</eui-checkbox>

            <p>
              2. Our application(s) is(are) divided into components,
              probably no more than five or six, communicating through
              networking.
            </p>
            <eui-checkbox name="productP1" @change="${(val) => this.processSubQuestions(5.2)}">Yes</eui-checkbox>

            <p>
              3. When we deliver, everything is delivered together, all
              ready on the same day and at a uniformly high level of
              quality.
            </p>
            <eui-checkbox name="productP1" @change="${(val) => this.processSubQuestions(5.3)}">Yes</eui-checkbox>

            <p>
              4. The scope of an app in development is defined by
              the deployment schedule. Each feature or piece of
              functionality is broken down into deliverable chunks that
              fit into the schedule.
            </p>
            <eui-checkbox name="productP1" @change="${(val) => this.processSubQuestions(5.4)}">Yes</eui-checkbo>

        </div>
        </eui-wizard-step>

      <!--MAINTENANCE ----------------------------------------------------------------------->
      <eui-wizard-step step-title="Maintenance" id="question6">
        <p>
          6.  Does your system collect metrics, alerts tracing and logging to provide a view of the running
          system and try to keep itself alive through seldf healing if things begin to deteriorate?
        </p>

        <eui-checkbox name="maintenanceM1" id="maintenanceM1" @change="${() => this.processMaintenanceQuestions()}">Yes</eui-checkbox>
        <eui-checkbox name="maintenanceM2" id="maintenanceM2" @change="${() => this.processMaintenanceQuestions()}">No</eui-checkbox>

        <br>

        <div id="cultureSubQ" style="display:${this.maintenanceSubEnabled ? 'block' : 'none'}">
            <h3>In our company</h3>
            <p>
              1. The scope of an app in development is defined by
              the deployment schedule. Each feature or piece of
              functionality is broken down into deliverable chunks that
              fit into the schedule.
            </p>
            <eui-checkbox name="productP1" @change="${(val) => this.processSubQuestions(6.1)}">Yes</eui-checkbox>

            <p>
              2. Our systems have full and continuous monitoring, and our
              Ops team spends lots of time checking on alerts. A lot of
              time, our system alerts turn out to be nothing.
            </p>
            <eui-checkbox name="productP1" @change="${(val) => this.processSubQuestions(6.2)}">Yes</eui-checkbox>

            <p>
              3. When problems arise, we have to open each server to
              understand what happened because we don’t have central
              logs or tracing. Then we fix it manually: someone from
              Operations logs into a production server and follows a
              preset procedure.
            </p>
            <eui-checkbox name="productP1" @change="${(val) => this.processSubQuestions(6.3)}">Yes</eui-checkbox>

            <p>
              4. Some of our system update processes are fully automated
              and patches can be applied quickly—but a human still has
              to initialise the process.
            </p>
            <eui-checkbox name="productP1" @change="${(val) => this.processSubQuestions(6.4)}">Yes</eui-checkbo>

        </div>
        </eui-wizard-step>

      <!--DELIVERY ----------------------------------------------------------------------->
      <eui-wizard-step step-title="Delivery" id="question7">
        <p>
          7. Do you deliver multiple times a day your releasable software?
        </p>

        <eui-checkbox name="deliveryD1" id="deliveryD1" @change="${() => this.processDeliveryQuestions()}">Yes</eui-checkbox>
        <eui-checkbox name="deliveryD2" id="deliveryD2" @change="${() => this.processDeliveryQuestions()}">No</eui-checkbox>

        <br>

        <div id="cultureSubQ" style="display:${this.deliverySubEnabled ? 'block' : 'none'}">
            <h3>In our company</h3>
            <p>
              1. We do ‘big bang’ releases that roll lots of changes into
              one new version, every six to 12 months. A lot of up-front
              planning goes into our next release before any actual
              development begins.
            </p>
            <eui-checkbox name="productP1" @change="${(val) => this.processSubQuestions(7.1)}">Yes</eui-checkbox>

            <p>
              2. Our delivery process includes some test automation
              and automated build, but outside of final integration.
              In an emergency, we can make manual updates to the
              production codebase.
            </p>
            <eui-checkbox name="productP1" @change="${(val) => this.processSubQuestions(7.2)}">Yes</eui-checkbox>

            <p>
              3. We don’t like to make changes to our production code,
              even emergency ones, because there are so many
              dependencies. Change is risky. Once we release a software
              version all changes have to wait for the next version
              roll out.
            </p>
            <eui-checkbox name="productP1" @change="${(val) => this.processSubQuestions(7.3)}">Yes</eui-checkbox>

            <p>
              4. New functionality requests typically can be
              accommodated within a few weeks, if they are urgent..
            </p>
            <eui-checkbox name="productP1" @change="${(val) => this.processSubQuestions(7.4)}">Yes</eui-checkbo>

        </div>
      </eui-wizard-step>

      <!--PROVISIONING ----------------------------------------------------------------------->
      <eui-wizard-step step-title="Provisioning" id="question8">
        <p>
          8. Do you run on Kubernetes?
        </p>

        <eui-checkbox name="provisioningP1" id="provisioningP1" @change="${() => this.processProvisioningQuestions()}">Yes</eui-checkbox>
        <eui-checkbox name="provisioningP2" id="provisioningP2" @change="${() => this.processProvisioningQuestions()}">No</eui-checkbox>

        <br>

        <div id="cultureSubQ" style="display:${this.provisioningSubEnabled ? 'block' : 'none'}">
            <h3>In our company</h3>
            <p>
              1. Operations team is in charge of provisioning, period. You
              have to write a ticket to provision a machine—engineers
              can’t self-service.
            </p>
            <eui-checkbox name="productP1" @change="${(val) => this.processSubQuestions(8.1)}">Yes</eui-checkbox>

            <p>
              2. A machine can be provisioned (possibly even
                autoprovisioned) in hours, or maybe a day or two, and the
                process is fully automated by Ops.
            </p>
            <eui-checkbox name="productP1" @change="${(val) => this.processSubQuestions(8.2)}">Yes</eui-checkbox>

            <p>
              3. Developers write applications, and specify what they
              will need to run successfully in production (OS, libraries,
              dependent tools). The Ops team manually configures the
              production machines to meet the machine dependencies
              the Dev team specified.
            </p>
            <eui-checkbox name="productP1" @change="${(val) => this.processSubQuestions(8.3)}">Yes</eui-checkbox>

            <p>
              4. Provisioning is a mix of automation and manual work.
              Any task taking longer than a week to provision to VM
              breaks the production cycle, so is a nonstarter.
            </p>
            <eui-checkbox name="productP1" @change="${(val) => this.processSubQuestions(8.4)}">Yes</eui-checkbo>

        </div>
      </eui-wizard-step>

      <!--INFRASTRUCTURE ----------------------------------------------------------------------->
      <eui-wizard-step step-title="Infrastructure" id="question9">
        <p>
          9. Do you deploy your software in containers?
        </p>

        <eui-checkbox name="infrastructureI1" id="infrastructureI1" @change="${() => this.processInfrastructureQuestions()}">Yes</eui-checkbox>
        <eui-checkbox name="infrastructureI2" id="infrastructureI2" @change="${() => this.processInfrastructureQuestions()}">No</eui-checkbox>

        <br>

        <div id="cultureSubQ" style="display:${this.infrastructureSubEnabled ? 'block' : 'none'}">
            <h3>In our company</h3>
            <p>
              1. We have multiple physical servers in our own private
              data center (either on premises or co-located). If one of
              our servers goes down, we have to manually provision its
              replacement.
            </p>
            <eui-checkbox name="productP1" @change="${(val) => this.processSubQuestions(9.1)}">Yes</eui-checkbox>

            <p>
              2. We don’t use physical servers—we have VMs. We also
              have some instances in the cloud, which we manage
              manually.
            </p>
            <eui-checkbox name="productP1" @change="${(val) => this.processSubQuestions(9.2)}">Yes</eui-checkbox>

            <p>
              3. A data centre failure is just about the worst disaster we
              can imagine.
            </p>
            <eui-checkbox name="productP1" @change="${(val) => this.processSubQuestions(9.3)}">Yes</eui-checkbox>

            <p>
              4. Provisioning infrastructure is a mix of automation and
              manual work, so a new VM can take a couple of days to
              set up.
            </p>
            <eui-checkbox name="productP1" @change="${(val) => this.processSubQuestions(9.4)}">Yes</eui-checkbo>

        </div>
      </eui-wizard-step>

      <!--RESULT   ----------------------------------------------------------------------->
      <eui-wizard-step valid step-title="Result">
        <div id="thankyou" style="display:${this.resultDiv ? 'none' : 'block'}">
          <h2>Thank you for answering all questions.<br> Click finish to see your results!</h2>
        </div>
        <div id="table" style="display:${this.resultDiv ? 'block' : 'none'}">
          <table id="table" style='border: 10px'>
            <tr style='background-color: aquamarine'>
              <th>Stage</th>
              <th>No Process</th>
              <th>Waterfall</th>
              <th width=50></th>
              <th>Agile</th>
              <th>Cloud Native</th>
            </tr>
            <tr>
              <td style='background-color: antiquewhite'>Culture</td>
              <td>Individualist</td>
              <td id='cult0'>Predictive</td>
              <td id='cult1'></td>
              <td id='cult2'>Iterative</tdid>
              <td id='cult3' style='background-color: red'>Collaborative</td>
            </tr>
            <tr>
              <td style='background-color: antiquewhite'>Product/Service Design</td>
              <td>Arbibrary</td>
              <td>Long-term-plans</td>
              <td style='background-color: red'></td>
              <td>Feature Driven</td>
              <td>Data Driven</td>
            </tr>
            <tr>
              <td style='background-color: antiquewhite'>Team</td>
              <td>No organisation</td>
              <td style='background-color: red'>Hierachy</td>
              <td></td>
              <td>Cross-Functional teams</td>
              <td>DevOPs/SRE</td>
            </tr>
            <tr>
              <td style='background-color: antiquewhite'>Process</td>
              <td>Random</td>
              <td>Waterfall</td>
              <td></td>
              <td style='background-color: red'>Agile(scrum/kanban)</td>
              <td>Design thinking + agile + lean</td>
            </tr>
            <tr>
              <td style='background-color: antiquewhite'>Architecture</td>
              <td>Emerging from trial and error</td>
              <td>Tightly coupled monolith</td>
              <td></td>
              <td style='background-color: red'>Client server</td>
              <td>Microservices</td>
            </tr>
            <tr>
              <td style='background-color: antiquewhite'>Maintenance</td>
              <td>Respond to users complaints</td>
              <td style='background-color: red'>Ad-hoc monitoring</td>
              <td></td>
              <td>Alerting</td>
              <td>Full observability & self healing</td>
            </tr>
            <tr>
              <td style='background-color: antiquewhite'>Delivery</td>
              <td>Irregular releases</td>
              <td>Periodic releases</td>
              <td style='background-color: red'></td>
              <td>Continuous integration</td>
              <td>Continuous delivery</td>
            </tr>
            <tr>
              <td style='background-color: antiquewhite'>Provisioning</td>
              <td>Manual</td>
              <td>Scripted</td>
              <td></td>
              <td>Config.management(puppet/Chef/Ansible)</td>
              <td style='background-color: red'>Orchestration(Kubernetes)</td>
            </tr>
            <tr>
              <td style='background-color: antiquewhite'>Infrastructure</td>
              <td>Single server</td>
              <td style='background-color: red'>Multiple servers</td>
              <td></td>
              <td>VMs(pets)</td>
              <td>Containers/hybrid cloud(cattle)</td>
            </tr>
          </table>
        </div>
      </eui-wizard-step>

    </eui-wizard>
    `;
  }
}

definition('e-survey-app', {
  style,
  props: {
    finalArr: {
      attribute: false,
      type: Array,
      default: []
    },
    resultDiv: {
      type: Boolean,
      default: false
    },
    cultureMain: {
      type: Boolean,
      default: false
    },
    productDesignMain: {
      type: Boolean,
      default: false
    },
    teamMain: {
      type: Boolean,
      default: false
    },
    processMain: {
      type: Boolean,
      default: false
    },
    architectureMain: {
      type: Boolean,
      default: false
    },
    maintenanceMain: {
      type: Boolean,
      default: false
    },
    deliveryMain: {
      type: Boolean,
      default: false
    },
    provisioningMain: {
      type: Boolean,
      default: false
    },
    infrastructureMain: {
      type: Boolean,
      default: false
    },

    cultureSubEnabled: {
      type: Boolean,
      default: false
    },
    c1: {
      type: Boolean,
      default: false
    },
    c2: {
      type: Boolean,
      default: false
    },
    c3: {
      type: Boolean,
      default: false
    },
    c4: {
      type: Boolean,
      default: false
    },

    productDesignSubEnabled: {
      type: Boolean,
      default: false
    },
    p1: {
      type: Boolean,
      default: false
    },
    p2: {
      type: Boolean,
      default: false
    },
    p3: {
      type: Boolean,
      default: false
    },
    p4: {
      type: Boolean,
      default: false
    },

    teamSubEnabled: {
      type: Boolean,
      default: false
    },
    t1: {
      type: Boolean,
      default: false
    },
    t2: {
      type: Boolean,
      default: false
    },
    t3: {
      type: Boolean,
      default: false
    },
    t4: {
      type: Boolean,
      default: false
    },

    processSubEnabled: {
      type: Boolean,
      default: false
    },
    pr1: {
      type: Boolean,
      default: false
    },
    pr2: {
      type: Boolean,
      default: false
    },
    pr3: {
      type: Boolean,
      default: false
    },
    pr4: {
      type: Boolean,
      default: false
    },

    architechtureSubEnabled: {
      type: Boolean,
      default: false
    },
    a1: {
      type: Boolean,
      default: false
    },
    a2: {
      type: Boolean,
      default: false
    },
    a3: {
      type: Boolean,
      default: false
    },
    a4: {
      type: Boolean,
      default: false
    },

    maintenanceSubEnabled: {
      type: Boolean,
      default: false
    },
    m1: {
      type: Boolean,
      default: false
    },
    m2: {
      type: Boolean,
      default: false
    },
    m3: {
      type: Boolean,
      default: false
    },
    m4: {
      type: Boolean,
      default: false
    },

    deliverySubEnabled: {
      type: Boolean,
      default: false
    },
    d1: {
      type: Boolean,
      default: false
    },
    d2: {
      type: Boolean,
      default: false
    },
    d3: {
      type: Boolean,
      default: false
    },
    d4: {
      type: Boolean,
      default: false
    },

    provisioningSubEnabled: {
      type: Boolean,
      default: false
    },
    prov1: {
      type: Boolean,
      default: false
    },
    prov2: {
      type: Boolean,
      default: false
    },
    prov3: {
      type: Boolean,
      default: false
    },
    prov4: {
      type: Boolean,
      default: false
    },

    infrastructureSubEnabled: {
      type: Boolean,
      default: false
    },
    i1: {
      type: Boolean,
      default: false
    },
    i2: {
      type: Boolean,
      default: false
    },
    i3: {
      type: Boolean,
      default: false
    },
    i4: {
      type: Boolean,
      default: false
    },
  },
})(SurveyApp);

SurveyApp.register();
