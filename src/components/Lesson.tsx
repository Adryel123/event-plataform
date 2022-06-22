import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/esm/locale/pt-BR'
import { If } from '../utils/components/If'

interface LessonProps {
  title: string
  slug: string
  avaliableAt: Date
  type: 'live' | 'class'
}

export function Lesson({ title, slug, avaliableAt, type }: LessonProps) {
  const isLessonAvailable = isPast(avaliableAt)
  const avaliableDateFormatted = format(avaliableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
    locale: ptBR
  })

  return (
    <a href="#">
      <span className="text-gray-300">
        {avaliableDateFormatted}
      </span>

      <div className="rounded border border-gray-500 p-4 mt-2">
        <header className="flex items-center justify-between">

          <If condition={isLessonAvailable}
            thenValue={
              <span className="text-sm text-blue-500 font-medium flex items-center gap-2">
                <CheckCircle size={20} />
                Conteúdo liberado
              </span>
            }
            elseValue={
              <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
                <Lock size={20} />
                Em breve
              </span>
            }
          />

          <span className="text-xs rounded py-[0.125rem] px-2 text-white border border-green-300 font-bold">
            <If condition={type === 'live'}
              thenValue={"AO VIVO"}
              elseValue={"AULA PRÁTICA"}
            />
          </span>
        </header>

        <strong className="text-gray-200 mt-5 block">
          {title}
        </strong>

      </div>
    </a>
  )
}