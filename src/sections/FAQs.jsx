import React from 'react'
import Animated from '../components/Animated'
import { faqs } from '../data/data'
import { Plus, X } from 'lucide-react'

const FAQs = () => {
  return (
    <section id="faq" className='px-auto mt-44'>
      <div className='max-w-3xl mx-auto'>
        <div className='text-center mb-14'>
          <Animated delay={0.2}>
            <p className='text-orange-500 font-medium uppercase mb-4'>
              FAQs
            </p>
          </Animated>

          <Animated delay={0.2}>
            <h2 className='text-4xl md:text-5xl max-w-xl mx-auto text-balance'>
              Frequently Asked Questions
            </h2>
          </Animated>
        </div>

        <div className='space-y-3'>
          {faqs.map((faq, index) => (
            <Animated
              key={index}
              y={150}
              delay={index * 0.15}
            >
              {/*
                Usamos <details>/<summary> nativos de HTML en vez de useState + onClick.
                El navegador gestiona el estado abierto/cerrado por su cuenta y añade
                automáticamente el atributo `open` al <details> cuando está expandido.
                Ventajas: menos código, accesible por teclado y lectores de pantalla
                sin esfuerzo extra, y no se necesita ningún manejador de eventos.
              */}
              <details className='border border-slate-200 text-zinc-500 rounded-lg group'>
                {/*
                  <summary> es la cabecera clicable: el navegador alterna el estado
                  del <details> padre al hacer clic, sin JS.
                  La clase `group` marca este <details> como referencia para que
                  Tailwind pueda aplicar estilos condicionales con `group-open:`
                  a los elementos hijos según el atributo `open`.
                */}
                <summary className='flex items-center justify-between p-4 cursor-pointer list-none hover:bg-slate-50/50 transition-colors
                  [&::-webkit-details-marker]:hidden'
                >
                  {/*
                    [&::-webkit-details-marker]:hidden oculta la flecha/triángulo
                    que Chrome y Safari añaden por defecto al <summary>, ya que
                    usamos nuestro propio icono (Plus/X) en su lugar.
                  */}
                  <span className='text-zinc-700 pr-4'>{faq.question}</span>

                  <span className='size-7 rounded-full bg-black/5 grid place-content-center shrink-0'>
                    {/*
                      Alternancia de iconos resuelta 100% con CSS (Tailwind),
                      sin estado de React:
                      - Plus: visible por defecto, se oculta cuando el <details>
                        ancestro (.group) tiene el atributo `open`.
                      - X: oculto por defecto, se muestra solo cuando el <details>
                        ancestro está abierto.
                      Tailwind traduce `group-open:*` a un selector tipo
                        `.group[open] & { ... }` en el CSS generado.
                    */}
                    <Plus size={14} className="group-open:hidden" />
                    <X size={14} className="hidden group-open:block" />
                  </span>
                </summary>

                {/*
                  Contenido de la respuesta. El propio navegador lo oculta/muestra
                  según el estado del <details>, sin necesidad de condicionales
                  en React (no hay `{isOpen && <p>...}`).
                */}
                <p className='px-5 pb-4 leading-relaxed'>{faq.answer}</p>
              </details>
            </Animated>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQs