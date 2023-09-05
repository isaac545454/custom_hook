import { useHome } from "./hook";
import { Modal, GridInput, Input } from "@components";
import { Fragment } from "react";

export const Home = () => {
  const { onChangeModal, showModal, errors, register, handleSubmit, onSubmit } =
    useHome();
  return (
    <Modal.Container showModal={showModal}>
      <Fragment>
        <Modal.Header />
        <GridInput onSubmit={handleSubmit(onSubmit)}>
          <Fragment>
            <Input.Container>
              <Input.Label name="CPF" />
              <Input.Mask mask="999.999.99" {...register("cpf")} />
              <Input.Error errrors={errors} name="cpf" />
            </Input.Container>
            <Input.Container>
              <Input.Label name="SENHA" />
              <Input.Text type="password" {...register("password")} />
              <Input.Error errrors={errors} name="password" />
            </Input.Container>
          </Fragment>
          <Modal.ContainerButtons>
            <Fragment>
              <Modal.ButtonCancel type="button" onClick={onChangeModal} />
              <Modal.ButtonToSend type="submit" />
            </Fragment>
          </Modal.ContainerButtons>
        </GridInput>
      </Fragment>
    </Modal.Container>
  );
};
