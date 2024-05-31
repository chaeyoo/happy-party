import { Party } from '@/models/party'
import { doc, getDoc } from 'firebase/firestore'
import { store } from './firebase'

// pageParam 지금 보이고있는 맨 마지막요소

export async function getParty(id: string) {
  const snapshot = await getDoc(doc(store, 'PARTY', id))

  return {
    ...(snapshot.data() as Party),
  }
}
