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
            <p className="journey-kicker">{introKicker}</p>
            <h1>{active.name}</h1>
            <h2>{active.eyebrow}</h2>
            <p>{active.intro}</p>
            <span className="scroll-cue">{content.journey.scrollCue}</span>
          </article>

          <article className="journey-copy journey-copy--two journey-copy--right">
            <p className="journey-kicker">{content.journey.designKicker}</p>
            <h2>{active.designTitle}</h2>
            <p>{active.designBody}</p>
          </article>

          <article className="journey-copy journey-copy--three">
            <p className="journey-kicker">
              {active.secondarySectionKicker ?? content.journey.cameraKicker}
            </p>
            <h2>{active.cameraTitle}</h2>
            <p>{active.cameraBody}</p>
          </article>

          <article className="journey-copy journey-copy--four journey-copy--right">
            <p className="journey-kicker">
              {content.journey.performanceKicker}
            </p>
            <h2>{active.performanceTitle}</h2>
            <p>{active.performanceBody}</p>
          </article>

          <article className="journey-copy journey-copy--five">
            <p className="journey-kicker">{content.journey.turnKicker}</p>
            <h2>
              {content.journey.finalTitle[0]}
              <br />
              {content.journey.finalTitle[1]}
            </h2>
            <p>{content.journey.finalBody}</p>
            <Button onClick={() => setExploded(true)} className="final-action">
              <Box aria-hidden="true" /> {content.journey.finalAction}
            </Button>
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

      <ExperienceFooter content={content.sources} />
    </main>
  );
}
