import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("Prueba de componente <GifItem/>", () => {
  const title = "saitama";
  const url = "https://one-punch.saitama/soy";
  test("Debe de hacer match con el snapshot ", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });
  test("Debe de mostrar la imagen con el URL y el Titulo indicado", () => {
    //
    render(<GifItem title={title} url={url} />);
    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });
  test('Debe de mostrar el titulo en el componente', () => { 
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy()

   })
});
