import { useFormContext } from "react-hook-form";
import { Cep, HouseInformation, Localization, InputCountainerBox, InputBox, OpcionalInputTrue, InputCountainerElement, ErrorMessage } from "./styles";
import { paymentFormProps } from "../../pages/Checkout/index"

export function InputCountainer() {
  const { register, formState: {errors} } = useFormContext<paymentFormProps>();

  return (
    <InputCountainerBox>
      <Cep>
        <InputCountainerElement>
          <InputBox placeholder="CEP" type="text" {...register("cep")}/>
        </InputCountainerElement> 
        {errors.cep && <ErrorMessage>{errors.cep.message}</ErrorMessage>}
      </Cep>

      <div>
        <InputCountainerElement>
          <InputBox placeholder="Rua" type="text" {...register("rua")}/>
        </InputCountainerElement>
        {errors.rua && <ErrorMessage>{errors.rua.message}</ErrorMessage>}
      </div>  

      <HouseInformation>
        <div>
          <InputCountainerElement>
            <InputBox placeholder="Número" type="text" {...register("numero")}/>
          </InputCountainerElement>
          {errors.numero && <ErrorMessage>{errors.numero.message}</ErrorMessage>}
        </div>
        <div>
          <InputCountainerElement>
            <InputBox placeholder="Complemento" type="text" {...register("complemento")}/>
            <OpcionalInputTrue>Opcional</OpcionalInputTrue>
          </InputCountainerElement>
        </div>
      </HouseInformation>

      <Localization>
        <div>
          <InputCountainerElement>
            <InputBox placeholder="Bairro" type="text" {...register("bairro")}/>
          </InputCountainerElement>
          {errors.bairro && <ErrorMessage>{errors.bairro.message}</ErrorMessage>}
        </div>
        <div>
          <InputCountainerElement>
            <InputBox placeholder="Cidade" type="text" {...register("cidade")}/>
          </InputCountainerElement>
          {errors.cidade && <ErrorMessage>{errors.cidade.message}</ErrorMessage>}
        </div>
        <div>
          <InputCountainerElement>
            <InputBox placeholder="UF" type="text" {...register("uf")}/>
          </InputCountainerElement>
          {errors.uf && <ErrorMessage>{errors.uf.message}</ErrorMessage>}
        </div>
      </Localization>

    </InputCountainerBox>
  )
}