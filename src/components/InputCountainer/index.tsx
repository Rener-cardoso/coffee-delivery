import { useFormContext } from "react-hook-form";
import { Cep, HouseInformation, Localization, InputCountainerBox, InputBox, OpcionalInputTrue, InputCountainerElement } from "./styles";

export function InputCountainer() {
  const { register } = useFormContext();

  return (
    <InputCountainerBox>
      <Cep>
        <InputCountainerElement>
          <InputBox placeholder="CEP" type="text" {...register("Cep")}/>
        </InputCountainerElement> 
      </Cep>

      <div>
        <InputCountainerElement>
          <InputBox placeholder="Rua" type="text" {...register("Rua")}/>
        </InputCountainerElement>
      </div>  

      <HouseInformation>
        <InputCountainerElement>
          <InputBox placeholder="Número" type="text" {...register("Número")}/>
        </InputCountainerElement>

        <InputCountainerElement>
          <InputBox placeholder="Complemento" type="text" {...register("Complemento")}/>
          <OpcionalInputTrue>Opcional</OpcionalInputTrue>
        </InputCountainerElement>

      </HouseInformation>

      <Localization>
        <InputCountainerElement>
          <InputBox placeholder="Bairro" type="text" {...register("Bairro")}/>
        </InputCountainerElement>

        <InputCountainerElement>
          <InputBox placeholder="Cidade" type="text" {...register("Cidade")}/>
        </InputCountainerElement>

        <InputCountainerElement>
          <InputBox placeholder="UF" type="text" {...register("UF")}/>
        </InputCountainerElement>
      </Localization>

    </InputCountainerBox>
  )
}