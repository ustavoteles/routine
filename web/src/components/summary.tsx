import { CheckCircle2, Plus } from 'lucide-react'
import { Button } from './ui/button'
import { DialogTrigger } from './ui/dialog'
import { RoutineIcon } from './routine-icon'
import { Progress, ProgressIndicator } from './ui/progress-bar'
import { Separator } from './ui/separator'
import { OutlineButton } from './ui/outline-button'

export function Summary() {
  return (
    <div className="py-10 max-w-[480px] px-5 mx-auto flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <RoutineIcon />
          <span className="text-lg font-semibold">5 a 12 de Agosto</span>
        </div>

        <DialogTrigger asChild>
          <Button size="sm">
            <Plus className="size-4" />
            Cadastrar meta
          </Button>
        </DialogTrigger>
      </div>

      <div className="flex flex-col gap-3">
        <Progress value={8} max={15}>
          <ProgressIndicator style={{ width: '70%' }} />
        </Progress>
        <div className="flex items-center justify-between text-xs text-zinc-400">
          <span>
            Você completou <span className="text-zinc-100">8</span> de{' '}
            <span className="text-zinc-100">15</span> metas nessa semana
          </span>
          <span>58%</span>
        </div>
      </div>

      <Separator />
      <div className="flex flex-wrap gap-3 ">
        <OutlineButton className="text-zinc-100">
          <Plus className="size-4 text-zinc-600" />
          Correr
        </OutlineButton>

        <OutlineButton className="text-zinc-100">
          <Plus className="size-4 text-zinc-600" />
          Ler
        </OutlineButton>

        <OutlineButton className="text-zinc-100">
          <Plus className="size-4 text-zinc-600" />
          Academia
        </OutlineButton>

        <OutlineButton className="text-zinc-100">
          <Plus className="size-4 text-zinc-600" />
          Estudar
        </OutlineButton>

        <OutlineButton className="text-zinc-400">
          <Plus className="size-4 text-zinc-400" />
          Trabalhar
        </OutlineButton>
      </div>
      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-medium">Sua semana</h2>
        <div className="flex flex-col gap-4">
          <h3 className="font-medium">
            Sábado{' '}
            <span className="text-zinc-400 text-zs">(12 de Setembro)</span>
          </h3>
          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-[#10b97e]" />
              <span className="text-sm text-zinc-400">
                Você completou "<span className="text-zinc-100">Ler</span>" às{' '}
                <span className="text-zinc-100">08:13h</span>
              </span>
              <a href="." className="underline text-zinc-500 px-2">
                Desfazer
              </a>
            </li>

            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-[#10b97e]" />
              <span className="text-sm text-zinc-400">
                Você completou "<span className="text-zinc-100">Ler</span>" às{' '}
                <span className="text-zinc-100">08:13h</span>
              </span>
              <a href="." className="underline text-zinc-500 px-2">
                Desfazer
              </a>
            </li>

            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-[#10b97e]" />
              <span className="text-sm text-zinc-400">
                Você completou "<span className="text-zinc-100">Ler</span>" às{' '}
                <span className="text-zinc-100">08:13h</span>
              </span>
              <a href="." className="underline text-zinc-500 px-2">
                Desfazer
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="font-medium">
          Domingo{' '}
          <span className="text-zinc-400 text-zs">(12 de Setembro)</span>
        </h3>
        <ul className="flex flex-col gap-3">
          <li className="flex items-center gap-2">
            <CheckCircle2 className="size-4 text-[#10b97e]" />
            <span className="text-sm text-zinc-400">
              Você completou "<span className="text-zinc-100">Ler</span>" às{' '}
              <span className="text-zinc-100">08:13h</span>
            </span>
            <a href="." className="underline text-zinc-500 px-2">
              Desfazer
            </a>
          </li>

          <li className="flex items-center gap-2">
            <CheckCircle2 className="size-4 text-[#10b97e]" />
            <span className="text-sm text-zinc-400">
              Você completou "<span className="text-zinc-100">Ler</span>" às{' '}
              <span className="text-zinc-100">08:13h</span>
            </span>
            <a href="." className="underline text-zinc-500 px-2">
              Desfazer
            </a>
          </li>

          <li className="flex items-center gap-2">
            <CheckCircle2 className="size-4 text-[#10b97e]" />
            <span className="text-sm text-zinc-400">
              Você completou "<span className="text-zinc-100">Ler</span>" às{' '}
              <span className="text-zinc-100">08:13h</span>
            </span>
            <a href="." className="underline text-zinc-500 px-2">
              Desfazer
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
