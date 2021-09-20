import Component from '@glimmer/component';
import { action } from '@ember/object';
import {inject as service} from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class CardComponent extends Component {
  @service
  store

  @service
  modalsManager;

  @tracked type;

  @action
  deleteItem(id, type) {
    alert(this.args.elementId);
    if (this.args.removeAction) {
      this.args.removeAction(this.args.elementId);
      return;
    }

    let item = this.store.peekRecord(type, id);
    item.deleteRecord();
    item.save(); // => DELETE to /posts/1
  }

  @action
  editItem(item, type) {
    const isBill = type === 'bill';

    return this.modalsManager
      .show('modal-with-form', {
        item: item,
        isBill: isBill,
        title: `Edit ${type}`,
        saveTitle: 'Update'})
      .then(formValues => {
        this.store.findRecord(type, item.id).then(function(current) {
          current = item;
          current.save(); // => PATCH to '/posts/1'
        });
      })
      .catch(() => {
        // modal is closed without submit
      });
  }
}
