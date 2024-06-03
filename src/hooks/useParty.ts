import { Party } from '@/models/party'
import { getParty } from '@/remote/party'
import { useQuery } from 'react-query'
export default function useParty() {
  const { data, isLoading, error } = useQuery<Party>(['party'], () =>
    getParty('Iypv1hNiIMiI7IZmkolU'),
  )

  return { party: data, isLoading, error }
}
