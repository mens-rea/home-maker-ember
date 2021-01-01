import Component from '@glimmer/component';
import { action } from '@ember/object';
import {inject as service} from '@ember/service';

export default class CardComponent extends Component {
  @service
  store

  @service
  modalsManager;

  @action
  deleteItem(id, type) {
    let item = this.store.peekRecord(type, id);
    item.deleteRecord();
    item.save(); // => DELETE to /posts/1
  }

  @action
  editItem(item, type) {
    return this.modalsManager
      .show('modal-with-form', {item: item, title: `Edit ${type}`, saveTitle: 'Update'})
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
