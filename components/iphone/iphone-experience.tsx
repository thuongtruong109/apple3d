"use client";

import { Button } from "@/components/ui/button";
import { Box, Rotate3D } from "lucide-react";
import { useRef, useState } from "react";
import { ExperienceControlDock } from "./experience-control-dock";
import { ExperienceFooter } from "./experience-footer";
import { LanguageSelect } from "./language-select";
import {
  hasProductModels,
  productCategoryCatalog,
  type ProductCategory,
} from "./product-category-data";
import { ProductCategoryPreview } from "./product-category-preview";
import { ProductTechnicalSpecs } from "./product-technical-specs";
import { ScrollReveal, WordReveal } from "./scroll-reveal";
import { StorePolicyExperience } from "./store-policy-experience";
import { getProductCopy } from "./product-copy";
import { productTechnicalSpecs } from "./product-specs";
import {
  getSeriesForModel,
  modelFinishes,
  productCatalog,
  type Finish,
  type Model,
} from "./product-data";
import type { DuoPose } from "./three/official-models";
import { ProductScene } from "./three/phone-scene";
import { useLanguage } from "./use-language";
import { useConceptTool } from "./use-webmcp";

export function AppleProductExperience() {
  const [category, setCategory] = useState<ProductCategory>("iphone");
  const [model, setModel] = useState<Model>("pro");
  const [finish, setFinish] = useState<Finish>("burgundy");
  const [duoPose, setDuoPose] = useState<DuoPose>("landscape");
  const [exploded, setExploded] = useState(false);
  const [resetKey, setResetKey] = useState(0);
  const experienceRef = useRef<HTMLElement>(null);
  const { language, setLanguage, content } = useLanguage();
  const active = getProductCopy(content, language, model);
  const introKicker = content.journey.introKicker.replace(
    /\d{4}(?:–\d{4})?$/,
    productTechnicalSpecs[model].introduced,
  );
  const availableFinishes = modelFinishes[model];
  const series = getSeriesForModel(model);
  const hasCatalog = hasProductModels(category);

  useConceptTool(setCategory, setModel, setFinish);

  function changeModel(next: Model) {
    setModel(next);
    setExploded(false);
    setFinish(productCatalog[next].defaultFinish);
  }

  function changeCategory(next: ProductCategory) {
    setCategory(next);
    setExploded(false);
    const defaultModel = productCategoryCatalog[next].defaultModel;
    if (defaultModel) changeModel(defaultModel);
  }

  return (
    <main className={`immersive-page immersive-page--${category} immersive-page--${model}`}>
      <section
        ref={experienceRef}
        className={`immersive-stage${hasCatalog ? "" : " immersive-stage--category"}`}
        id="experience"
      >
        <div className="stage-sticky">
          {hasCatalog ? (
            <ProductScene
              containerRef={experienceRef}
              model={model}
              finish={finish}
              duoPose={duoPose}
              exploded={exploded}
              resetKey={resetKey}
            />
          ) : (
            <ProductCategoryPreview category={category} language={language} />
          )}

          <header className="experience-header">
            <a
              href="#experience"
              className="apple-mark"
              aria-label={content.header.homeLabel}
            >
              <span>Apple</span> {productCategoryCatalog[category].shortLabel}
            </a>
            <p>{content.header.productLab}</p>
            <div className="header-actions">
              <LanguageSelect
                language={language}
                label={content.header.language}
                onChange={setLanguage}
              />
            </div>
          </header>

          {hasCatalog && (
            <>
              <div className="scene-reticle" aria-hidden="true">
                <span />
                <span />
              </div>
              <div className="scene-index" aria-hidden="true">
                <span>01</span>
                <i />
                <span>05</span>
              </div>

              <div className="gesture-hint">
                <Rotate3D size={18} aria-hidden="true" />
                <span>
                  {content.gesture.rotate}
                  <br />
                  {content.gesture.zoom}
                </span>
              </div>
            </>
          )}

          {hasCatalog && <div className="live-specs" aria-live="polite">
            <span>
              {active.display}
              <small>{active.primarySpecLabel ?? content.controls.display}</small>
            </span>
            <span>
              {active.camera}
              <small>{active.secondarySpecLabel ?? content.controls.camera}</small>
            </span>
            <span>
              {active.battery}
              <small>{content.controls.power}</small>
            </span>
          </div>}
        </div>

        <div className="control-dock-layer">
          <div className="control-dock-anchor">
            <ExperienceControlDock
              controls={content.controls}
              finishNames={content.finishes}
              category={category}
              model={model}
              finish={finish}
              series={series}
              availableFinishes={availableFinishes}
              duoPose={duoPose}
              exploded={exploded}
              hasCatalog={hasCatalog}
              onCategoryChange={changeCategory}
              onModelChange={changeModel}
              onFinishChange={setFinish}
              onDuoPoseChange={setDuoPose}
              onExplodedChange={setExploded}
              onResetView={() => setResetKey((value) => value + 1)}
            />
          </div>
        </div>

        {hasCatalog && <div className="scroll-narrative">
          <article className="journey-copy journey-copy--one">
            <ScrollReveal as="p" className="journey-kicker" delay={2000}>
              {introKicker}
            </ScrollReveal>
            <WordReveal as="h1" text={active.name} delay={2100} />
            <WordReveal text={active.eyebrow} delay={2220} />
            <ScrollReveal as="p" delay={2380}>{active.intro}</ScrollReveal>
            <ScrollReveal as="span" className="scroll-cue" delay={2520}>
              {content.journey.scrollCue}
            </ScrollReveal>
          </article>

          <article className="journey-copy journey-copy--two journey-copy--right">
            <ScrollReveal as="p" className="journey-kicker">
              {content.journey.designKicker}
            </ScrollReveal>
            <WordReveal text={active.designTitle} delay={70} />
            <ScrollReveal as="p" delay={180}>{active.designBody}</ScrollReveal>
          </article>

          <article className="journey-copy journey-copy--three">
            <ScrollReveal as="p" className="journey-kicker">
              {active.secondarySectionKicker ?? content.journey.cameraKicker}
            </ScrollReveal>
            <WordReveal text={active.cameraTitle} delay={70} />
            <ScrollReveal as="p" delay={180}>{active.cameraBody}</ScrollReveal>
          </article>

          <article className="journey-copy journey-copy--four journey-copy--right">
            <ScrollReveal as="p" className="journey-kicker">
              {content.journey.performanceKicker}
            </ScrollReveal>
            <WordReveal text={active.performanceTitle} delay={70} />
            <ScrollReveal as="p" delay={180}>{active.performanceBody}</ScrollReveal>
          </article>

          <article className="journey-copy journey-copy--five">
            <ScrollReveal as="p" className="journey-kicker">
              {content.journey.turnKicker}
            </ScrollReveal>
            <WordReveal text={content.journey.finalTitle.join(" ")} delay={70} />
            <ScrollReveal as="p" delay={180}>{content.journey.finalBody}</ScrollReveal>
            <ScrollReveal className="journey-action-reveal" delay={260}>
              <Button onClick={() => setExploded(true)} className="final-action">
                <Box aria-hidden="true" /> {content.journey.finalAction}
              </Button>
            </ScrollReveal>
          </article>
        </div>}

        {hasCatalog && (
          <div className="immersive-details">
            <ProductTechnicalSpecs
              language={language}
              model={model}
              productName={active.name}
            />
          </div>
        )}
      </section>

      <StorePolicyExperience language={language} />

      <ExperienceFooter content={content.sources} />
    </main>
  );
}
