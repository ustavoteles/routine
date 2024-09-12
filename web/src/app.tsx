import { Plus } from 'lucide-react'

import logo from './assets/logo-in-routine.svg'
import letsStart from './assets/lets-start.svg'
export function App() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-8">
      <img src={logo} alt="routine" />
      <img src={letsStart} alt="routine" />
      <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
        Você ainda não cadastrou nenhuma meta, que tal cadastrar um agora mesmo?
      </p>

      <button
        type="button"
        className="px-4 py-2.5 rounded-lg bg-[#10b97e] text-[#d2feed] flex items-center gap-2 txt-sm font-medium tracking-tight hover:bg-[#10b97ec1]"
      >
        <Plus className="size-4" />
        Cadastrar meta
      </button>
    </div>
  )
}
