import React, { useEffect, useRef } from "react";

function TextSplit({ children, revealType = "char" }) {
  const elementRef = useRef(null);

  const mergeRefs = (...refs) => {
    return (node) => {
      for (const ref of refs) {
        if (ref) ref.current = node;
      }
    };
  };

  useEffect(() => {
    const textElement = elementRef.current;
    if (!textElement) return;

    const letters =
      revealType === "word"
        ? textElement.querySelectorAll(".words .word")
        : textElement.querySelectorAll(".char");

    const letterCount = letters.length;
    const totalDuration = revealType === "word" ? 1200 : 1600;
    const adjustedDelay = totalDuration / letterCount;

    letters.forEach((letter, i) => {
      const delay = adjustedDelay * (i / 2);
      letter.style.setProperty("--delay", `${delay}ms`);
    });

    if (revealType === "word") {
      textElement.querySelectorAll(".words .word").forEach((word, i) => {
        const delay = adjustedDelay * (i / 5);
        word.style.setProperty("--delay", `${delay}ms`);
      });
    }
  }, [revealType]);

  const normalizeChildren = (nodes) => {
    return React.Children.toArray(nodes).flatMap((child) => {
      if (typeof child === "string") {
        return child.split(/(\s+)/).map((part) => (part === " " ? " " : part));
      } else if (React.isValidElement(child)) {
        if (child.type === "br") {
          return "<br/>";
        }

        return {
          tag: child.type,
          props: child.props,
          content: normalizeChildren(child.props.children),
        };
      }
      return child;
    });
  };

  const finalRender = normalizeChildren(children.props.children).map(
    (item, index) => {
      if (item === " ") {
        return (
          <span key={index} className="whitespace">
            {" "}
          </span>
        );
      }

      if (item === "<br/>") {
        return <br key={index} />;
      }

      if (typeof item === "string") {
        const words = revealType === "word" ? item.split(" ") : [item];
        return words.map((word, wordIndex) => (
          <React.Fragment key={`${index}-${wordIndex}`}>
            <span className="words line">
              <span className="word">
                {revealType === "char"
                  ? word.split("").map((char, charIndex) => (
                      <span key={charIndex} className="char">
                        {char}
                      </span>
                    ))
                  : word}
              </span>
            </span>
            <span className="whitespace"> </span>
          </React.Fragment>
        ));
      }

      if (item?.tag) {
        const Tag = item.tag;
        return (
          <Tag key={index} {...item.props}>
            {item.content.map((inner, innerIndex) => {
              if (inner === " ") {
                return (
                  <span key={innerIndex} className="whitespace">
                    {" "}
                  </span>
                );
              }

              if (typeof inner === "string") {
                return (
                  <span key={innerIndex} className="words line">
                    <span className="word">
                      {revealType === "char"
                        ? inner.split("").map((char, charIndex) => (
                            <span key={charIndex} className="char">
                              {char}
                            </span>
                          ))
                        : inner}
                    </span>
                  </span>
                );
              }

              return inner;
            })}
          </Tag>
        );
      }

      return null;
    }
  );

  return React.cloneElement(children, {
    ref: children.ref ? mergeRefs(children.ref, elementRef) : elementRef,
    children: finalRender,
  });
}

export default TextSplit;
