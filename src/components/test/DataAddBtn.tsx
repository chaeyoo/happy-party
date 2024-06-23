import { collection, doc, writeBatch } from 'firebase/firestore'

import { party } from '@/mock/data'
import { store } from '@/remote/firebase'

function DataAddButton() {
  const handleButtonClick = async () => {
    const batch = writeBatch(store)

    const docRef = doc(collection(store, 'PARTY'))

    batch.set(docRef, party)

    await batch.commit()

    alert('데이터 추가완료!')
  }

  return <button onClick={handleButtonClick}>데이터 추가하기 </button>
}

export default DataAddButton
