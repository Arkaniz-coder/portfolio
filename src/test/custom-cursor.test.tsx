import { cleanup, fireEvent, render } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import CustomCursor from "@/components/CustomCursor";

const originalMatchMedia = window.matchMedia;

const simulateDevice = (isDesktopWithMouse: boolean) => {
  window.matchMedia = ((query: string) => ({
    matches: isDesktopWithMouse,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  })) as typeof window.matchMedia;
};

const renderCursor = () => {
  const { container } = render(<CustomCursor />);
  return container.querySelector(".cursor-dot") as HTMLElement;
};

describe("curseur personnalisé", () => {
  beforeEach(() => simulateDevice(true));

  afterEach(() => {
    cleanup();
    document.body.replaceChildren();
    window.matchMedia = originalMatchMedia;
  });

  it("suit la souris immédiatement, sans lissage ni retard", () => {
    const dot = renderCursor();

    fireEvent.mouseMove(document, { clientX: 640, clientY: 360 });
    expect(dot.style.transform).toBe("translate3d(640px, 360px, 0)");
    expect(dot.style.opacity).toBe("1");

    fireEvent.mouseMove(document, { clientX: 100, clientY: 50 });
    expect(dot.style.transform).toBe("translate3d(100px, 50px, 0)");
  });

  it("s'agrandit sur un élément interactif puis revient à sa taille normale", () => {
    const dot = renderCursor();
    const link = document.createElement("a");
    link.href = "#";
    document.body.appendChild(link);

    fireEvent.mouseOver(link);
    expect(dot.dataset.hover).toBe("true");

    fireEvent.mouseOver(document.body);
    expect(dot.dataset.hover).toBe("false");
  });

  it("se cache quand la souris quitte la fenêtre et réapparaît au retour", () => {
    const dot = renderCursor();

    fireEvent.mouseMove(document, { clientX: 10, clientY: 10 });
    document.documentElement.dispatchEvent(new MouseEvent("mouseleave"));
    expect(dot.style.opacity).toBe("0");

    fireEvent.mouseMove(document, { clientX: 20, clientY: 20 });
    expect(dot.style.opacity).toBe("1");
  });

  it("reste inactif sur écran tactile ou étroit", () => {
    simulateDevice(false);
    const dot = renderCursor();

    fireEvent.mouseMove(document, { clientX: 640, clientY: 360 });
    expect(dot.style.opacity).toBe("0");
    expect(dot.style.transform).toBe("translate3d(-100px, -100px, 0)");
  });
});
