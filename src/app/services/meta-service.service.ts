import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Meta } from '../models/meta.model';

@Injectable({
  providedIn: 'root'
})
export class MetaService {
  private dbPath = '/metas';

  constructor(private db: AngularFirestore) { }

  // Leer metas
  getMetas() {
    return this.db.collection<Meta>(this.dbPath).snapshotChanges();
  }

  // Guardar meta
  addMeta(meta: Meta) {
    return this.db.collection(this.dbPath).add({ ...meta });
  }

  // Eliminar meta
  deleteMeta(id: string) {
    return this.db.doc(`${this.dbPath}/${id}`).delete();
  }
}
