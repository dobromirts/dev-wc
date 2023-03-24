import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { defineComponents, IgcCalendarComponent } from 'igniteui-webcomponents';

defineComponents(IgcCalendarComponent);

@customElement('app-master-view')
export default class MasterView extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
    }
    .calendar {
      width: max-content;
      height: max-content;
      flex-grow: 1;
      flex-basis: 0;
    }
    .text {
      height: max-content;
      min-width: min-content;
    }
  `;

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link href='https://fonts.googleapis.com/css?family=Titillium+Web' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <igc-calendar ?hide-header="${false}" header-orientation="horizontal" class="calendar"></igc-calendar>
      <p class="typography__body-1 text">
        Body 1
      </p>
    `;
  }
}
