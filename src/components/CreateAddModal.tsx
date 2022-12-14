import * as Dialog from "@radix-ui/react-dialog";
import { GameController } from "phosphor-react";
import Input from "./Form/Input";

const CreateAddModal = () => {
  return (
    <>
      {" "}
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
        <Dialog.Content className="fixed bg-[#2a2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black">
          <Dialog.Title className="text-3xl font-black">
            Publique seu anúncio
          </Dialog.Title>

          <form className="mt-8">
            <div className="flex flex-col gap-2">
              <label className="font-semibold" htmlFor="game">
                Qual o game?
              </label>
              <Input placeholder="Selecione o game que deseja jogar" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold" htmlFor="name">
                Seu nome (ou nickname)
              </label>
              <Input placeholder="Como te chamam dentro do game?" />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-semibold" htmlFor="yearsPlaying">
                  Joga a quantos anos?
                </label>
                <Input placeholder="Tudo bem ser ZERO" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-semibold" htmlFor="discord">
                  Qual o seu discord?
                </label>
                <Input placeholder="Usúario#0000" />
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-semibold" htmlFor="weekdays">
                  Quando costuma jogar?
                </label>
                <div className="grid grid-cols-4 gap-2">
                  <button
                    title="Domingo"
                    className="w-8 h-8 rounded bg-zinc-900"
                  >
                    D
                  </button>

                  <button
                    title="Segunda"
                    className="w-8 h-8 rounded bg-zinc-900"
                  >
                    S
                  </button>

                  <button title="Terça" className="w-8 h-8 rounded bg-zinc-900">
                    T
                  </button>

                  <button
                    title="Quarta"
                    className="w-8 h-8 rounded bg-zinc-900"
                  >
                    Q
                  </button>

                  <button
                    title="Quinta"
                    className="w-8 h-8 rounded bg-zinc-900"
                  >
                    Q
                  </button>

                  <button title="Sexta" className="w-8 h-8 rounded bg-zinc-900">
                    S
                  </button>

                  <button
                    title="Sábado"
                    className="w-8 h-8 rounded bg-zinc-900"
                  >
                    S
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <label className="font-semibold" htmlFor="hourStart">
                  Qual horário do dia?
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <Input placeholder="De" type="time" />
                  <Input type="time" placeholder="Até" />
                </div>
              </div>
            </div>

            <div className="mt-2 flex gap-2 text-sm">
              <input type="checkbox" id="" />
              Costumo me conectar ao chat de voz
            </div>

            <footer className="mt-4 flex justify-end gap-4">
              <Dialog.Close
                className="bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600"
                type="button"
              >
                Cancelar
              </Dialog.Close>
              <button
                className="flex items-center gap-3 bg-violet-500 px-5 h-12 rounded-md font-semibold hover:bg-violet-600"
                type="submit"
              >
                <GameController size={24} />
                Encontrar duo
              </button>
            </footer>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </>
  );
};

export default CreateAddModal;
