import { Party } from '@/models/party'
import { getParty } from '@/remote/party'
import { useEffect, useState } from 'react'

export default function useParty() {
  const [party, setParty] = useState<Party | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setLoading(true)
    getParty('Iypv1hNiIMiI7IZmkolU')
      .then((response) => {
        // console.log(response)
        setParty(response)
      })
      .catch((e) => {
        console.error(e)
        setError(true)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return { party, loading, error }
}
