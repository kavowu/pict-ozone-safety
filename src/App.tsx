import { Gauge, Microscope } from 'lucide-react';

export default function App() {
  const baseUrl = import.meta.env.BASE_URL;
  const logoImageUrl = `${baseUrl}images/wetop-logo-red.png`;
  const heroImageUrl = `${baseUrl}images/wetop-pict-hero.webp`;
  const reactChainImageUrl = `${baseUrl}images/pict-core-mechanism.jpg`;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="site-nav sticky top-0 z-50 bg-white border-b border-border">
        <div className="container flex items-center justify-between">
          <a href="#summary" className="brand-mark">
            <img src={logoImageUrl} alt="WETOP LOGO" className="brand-logo" />
          </a>
          <div className="nav-links flex gap-6 items-center">
            <a href="#four-answers" className="nav-link hover:opacity-70 transition-opacity">四大答覆</a>
            <a href="#epa-response" className="nav-link hover:opacity-70 transition-opacity">EPA 對照</a>
            <a href="#no2" className="nav-link hover:opacity-70 transition-opacity">O₃ vs NO₂</a>
            <a href="#references" className="nav-link hover:opacity-70 transition-opacity">參考資料</a>
          </div>
        </div>
      </nav>

      <section
        id="summary"
        className="hero-section"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(248, 250, 252, 0.97) 0%, rgba(248, 250, 252, 0.86) 39%, rgba(248, 250, 252, 0.2) 72%), url(${heroImageUrl})`
        }}
      >
        <div className="hero-content">
          <div className="hero-copy">
            <div className="kicker">Technical Response Dossier｜EPA 公開內容對照</div>
            <h1>PICT 技術面對臭氧存在的專業答覆：重點不是迴避臭氧，而是如何控制臭氧並避免 NO₂。</h1>
            <p className="lead">
              EPA 對臭氧產生器的提醒，核心在於避免未經工程化控制、以高濃度臭氧作為主力、且可能造成副產物風險的室內設備。WETOP 的答覆是把 PICT 定位為 AOP/ROS 反應鏈，承認會產生臭氧，但以濃度控制與 NO₂ 零容忍作為安全底線。<sup>[1]</sup> <sup>[3]</sup> <sup>[6]</sup>
            </p>
            <div className="cta-buttons">
              <a href="#four-answers" className="cta-button cta-primary">閱讀四大核心答覆</a>
              <a href="#epa-response" className="cta-button cta-secondary">查看 EPA 對照</a>
            </div>
          </div>
          <aside className="hero-panel" aria-label="核心結論摘要">
            <div className="label">Safety Thesis</div>
            <strong className="thesis">可控 O₃｜NO、NO₂｜公開資料對照</strong>
            <div className="description">
              把所有臭氧技術混為一談，會遮蔽真正的安全分界：濃度是否被量測、反應路徑是否被工程化、NO₂ 是否被設計排除。
            </div>
          </aside>
        </div>
      </section>

      <section className="metrics-band" aria-label="關鍵濃度概念">
        <div className="metric-block">
          <div className="metric-value">20-50 ppb</div>
          <div className="metric-label">自然背景量級參照</div>
        </div>
        <div className="metric-block">
          <div className="metric-value">0.050 ppm</div>
          <div className="metric-label">加州空氣資源局（CARB）室內裝置臭氧排放規範</div>
        </div>
        <div className="metric-block">
          <div className="metric-value">0.20-0.30 ppm</div>
          <div className="metric-label">EPA 提及部分臭氧機高設定可能達到的室內濃度</div>
        </div>
        <div className="metric-block danger-metric">
          <div className="metric-value">NO、NO₂</div>
          <div className="metric-label">WETOP 安全鐵律：避免 NO、NO₂ 生成</div>
        </div>
      </section>

      <section id="four-answers" className="content-section">
        <div className="kicker">Four Core Answers</div>
        <h2>四個關鍵必須說清楚，且每一項都要回到濃度、場景與工程控制。</h2>

        <div className="answer-cards">
          <article className="answer-card">
            <div className="label">
              <Gauge size={20} />
              01｜自然背景
            </div>
            <h3>臭氧不具備生物毒性，而是必須限制濃度與暴露時間的活性氣體。</h3>
            <p>
              臭氧長期存在於地表大氣與光化學循環中；因此，安全論述不能只問『有沒有臭氧』，而要問濃度是否被控制在可檢測、可稽核、可長期管理的範圍。WETOP 將正常背景量級 20-50 ppb 作為工程設計參照，但同時承認 EPA 對高濃度地表臭氧污染與呼吸刺激的警示。 <sup>[4]</sup> <sup>[6]</sup>
            </p>
          </article>

          <article className="answer-card">
            <div className="label">
              <Microscope size={20} />
              02｜劑量邏輯
            </div>
            <h3>醫療與消毒史說明臭氧可被劑量化使用，但不等於高濃度吸入安全。</h3>
            <p>
              臭氧在醫療、消毒與水處理史中有長期劑量化使用脈絡；這個事實能支持一個嚴謹結論：臭氧的風險核心在於劑量、途徑、暴露時間與工程控制，而不是把臭氧簡化為與 NO₂ 相同類型的穩定毒性污染物。 <sup>[5]</sup> <sup>[6]</sup>
            </p>
          </article>

          <article className="answer-card">
            <div className="label">03｜濃度控制</div>
            <h3>臭氧真正的工程問題，是避免累積到刺激性或高風險濃度。</h3>
            <p>
              EPA 指出某些臭氧產生器在高設定與門窗關閉條件下可能頻繁產生 0.20-0.30 ppm 的室內濃度；加州空氣資源局（CARB）也以 0.050 ppm 作為室內空氣清淨裝置臭氧排放規範。這些資料不是否定所有氧化技術，而是要求設備必須回答如何控制濃度。 <sup>[1]</sup> <sup>[2]</sup>
            </p>
          </article>

          <article className="answer-card">
            <div className="label">04｜NO₂ 零容忍</div>
            <h3>NO₂ 不是應被『控制到低一點』的淨化因子，而是不該出現在室內的副產物。</h3>
            <p>
              EPA 將 NO₂ 與 NO 稱為 toxic gases，並指出 NO₂ 是 highly reactive oxidant and corrosive；其風險包括眼鼻喉與呼吸道刺激、高劑量肺損傷及對氣喘、COPD 與幼兒呼吸感染風險的影響。WETOP 的安全鐵律因此不是『少量 NO₂ 可以接受』，而是設計上避免 NO₂ 生成。 <sup>[3]</sup> <sup>[6]</sup>
            </p>
          </article>
        </div>
      </section>

      <section id="epa-response" className="split-section">
        <div className="kicker">EPA Alignment</div>
        <h2>WETOP 不是否認 EPA，而是回答 EPA 真正要求回答的工程問題。</h2>
        <p>
          EPA 的公開資料把風險焦點放在「室內臭氧產生器」可能造成的高濃度暴露、效果不足與副產物問題；因此，專業答覆不應說「臭氧完全無害」，而應說明 PICT 如何把臭氧從不可控主力，轉為受控反應鏈中的短壽命、低濃度因子。<sup>[1]</sup> <sup>[4]</sup> <sup>[6]</sup>
        </p>

        <div className="issue-grid">
          <article className="issue-pair">
            <div className="issue-tag">Issue 01</div>
            <div className="issue-columns">
              <div className="issue-block">
                <h3>EPA 公開警示</h3>
                <p>臭氧產生器可能在有人室內環境造成過高臭氧濃度，且在不超過公共健康標準的濃度下，對部分污染物控制效果證據不足。</p>
              </div>
              <div className="issue-block">
                <h3>WETOP 專業答覆</h3>
                <p>PICT 不把高濃度臭氧作為唯一主力，而以光、離子、催化形成 AOP/ROS 連續反應鏈；臭氧是被量測與限制的中間因子，而非任意累積的除味手段。</p>
              </div>
            </div>
          </article>

          <article className="issue-pair">
            <div className="issue-tag">Issue 02</div>
            <div className="issue-columns">
              <div className="issue-block">
                <h3>EPA 公開警示</h3>
                <p>臭氧會與室內材料或化學物反應，可能形成其他刺激性副產物。</p>
              </div>
              <div className="issue-block">
                <h3>WETOP 專業答覆</h3>
                <p>安全評估必須同時看 O₃ 與 NO₂/NOx；WETOP 將 NO₂ 列為不可接受副產物，並把『可控臭氧、避免 NO₂』視為比單純討論臭氧濃度更完整的安全底線。</p>
              </div>
            </div>
          </article>

          <article className="issue-pair">
            <div className="issue-tag">Issue 03</div>
            <div className="issue-columns">
              <div className="issue-block">
                <h3>EPA 公開警示</h3>
                <p>不能以氣味改善或主觀感受取代污染物實際去除與健康安全評估。</p>
              </div>
              <div className="issue-block">
                <h3>WETOP 專業答覆</h3>
                <p>專業網站採用公開來源、濃度門檻、化學反應途徑與可檢測框架回答，而不是用『聞起來乾淨』作為安全證明。</p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="image-text-section">
        <div className="visual-pane">
          <img src={reactChainImageUrl} alt="PICT 核心反應機制圖" />
        </div>
        <div className="copy-pane">
          <div className="kicker">PICT / AOP / ROS</div>
          <h2>PICT 的重點不是單一臭氧，而是光、離子、催化形成的連續氧化反應鏈。</h2>
          <p>
            WETOP 將 PICT 定位為 Photo-Ion-Catalysis Technology，屬高階氧化技術思維；核心在於透過光解、離子化與觸媒催化形成多種短壽命淨化因子，而不是以高濃度臭氧單獨硬壓污染物。這也是 WETOP 與 EPA 警示可被清楚區分的關鍵：安全並非來自「沒有反應性物種」，而是來自反應物種的路徑、濃度與副產物控制。<sup>[1]</sup> <sup>[6]</sup>
          </p>
          <div className="reaction-concept">O₂ / H₂O + 光能 + 觸媒 → ROS / AOP 反應鏈 → 污染物化學鍵斷裂與降解</div>
        </div>
      </section>

      <section id="no2" className="principle-section">
        <div className="principle-banner">核心安全主張</div>
        <h2>臭氧可用濃度管理；NO₂ 則必須作為室內副產物排除。</h2>
        <p>
          這是網站最重要的科學區分。臭氧的工程問題是濃度是否被限制與暴露是否被控制；NO₂ 的問題則是其毒理屬性、相對穩定性與室內二次污染潛勢。
        </p>

        <table>
          <thead>
            <tr>
              <th>比較項目</th>
              <th>臭氧 O₃</th>
              <th>二氧化氮 NO₂</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>核心安全問題</strong></td>
              <td>濃度累積與暴露時間造成刺激或肺功能影響</td>
              <td>不應作為室內副產物存在；屬 EPA 明確列示的 toxic gas</td>
            </tr>
            <tr>
              <td><strong>室內管理邏輯</strong></td>
              <td>可用 ppm/ppb、通風、半衰期與源頭控制管理</td>
              <td>設計上應避免生成，不能以氣味或短暫通風作為安全保證</td>
            </tr>
            <tr>
              <td><strong>與 EPA 資料關係</strong></td>
              <td>EPA 反對不受控、高濃度或無效的臭氧產生器使用</td>
              <td>EPA 將 NO₂ 描述為 highly reactive oxidant and corrosive，並列多種呼吸健康風險</td>
            </tr>
            <tr>
              <td><strong>WETOP 安全底線</strong></td>
              <td>承認會產生，但限制在可稽核濃度框架</td>
              <td>絕對避免生成；作為安全鐵律而非行銷選項</td>
            </tr>
          </tbody>
        </table>

        <div className="safety-thesis">
          <div className="thesis-main">
            <h3>WETOP 安全鐵律</h3>
            <blockquote>
              WETOP 環境淨化器一定會產生臭氧，但是我們可以控制濃度；且絕對會避免 NO₂ 生成。這才是 WETOP 安全的鐵律。
            </blockquote>
            <p>
              這句話必須被放在網站最清楚的位置，因為它正面回答臭氧爭議：WETOP 不用「零臭氧」這種容易失真的語言逃避反應化學，而是承認反應性因子的存在，並把安全性建立在濃度控制、NO₂ 排除與公開資料可對照之上。<sup>[2]</sup> <sup>[3]</sup> <sup>[6]</sup>
            </p>
          </div>

          <div className="safety-principles">
            <div className="principle-item">承認臭氧存在，不做語意迴避。</div>
            <div className="principle-item">臭氧濃度以自然背景量級與法規門檻作為稽核框架。</div>
            <div className="principle-item">NO₂/NOx 作為不可接受副產物，設計上避免生成。</div>
            <div className="principle-item">不把氣味改善當作安全證明，回到化學路徑與檢測數據。</div>
          </div>
        </div>
      </section>

      <section id="references" className="content-section">
        <div className="kicker">References</div>
        <h2>參考資料與公開來源</h2>
        <p>
          本網站文字以 EPA、加州空氣資源局（CARB）、臭氧醫療史資料與使用者附件為主要基礎。涉及安全與健康的敘述，均應視為需要依實測濃度、產品規格與使用場景進一步核對的技術說明。
        </p>

        <div className="reference-list">
          <a className="reference-item" href="https://www.epa.gov/indoor-air-quality-iaq/ozone-generators-are-sold-air-cleaners" target="_blank" rel="noopener noreferrer">
            <div className="ref-number">[1]</div>
            <div className="ref-title">U.S. EPA｜Ozone Generators that are Sold as Air Cleaners</div>
            <div className="ref-description">EPA 對室內臭氧產生器有效性與安全性的核心警示。</div>
          </a>

          <a className="reference-item" href="https://ww2.arb.ca.gov/resources/fact-sheets/californias-regulation-limit-ozone-emissions-indoor-air-cleaning-devices" target="_blank" rel="noopener noreferrer">
            <div className="ref-number">[2]</div>
            <div className="ref-title">California Air Resources Board｜California's Regulation to Limit Ozone Emissions from Indoor Air Cleaning Devices</div>
            <div className="ref-description">加州對室內空氣清淨裝置臭氧排放低於 0.050 ppm 的可稽核框架。</div>
          </a>

          <a className="reference-item" href="https://www.epa.gov/indoor-air-quality-iaq/nitrogen-dioxides-impact-indoor-air-quality" target="_blank" rel="noopener noreferrer">
            <div className="ref-number">[3]</div>
            <div className="ref-title">U.S. EPA｜Nitrogen Dioxide's Impact on Indoor Air Quality</div>
            <div className="ref-description">EPA 對 NO₂ 作為 toxic gas、highly reactive oxidant and corrosive 的健康風險說明。</div>
          </a>

          <a className="reference-item" href="https://www.epa.gov/ground-level-ozone-pollution/ground-level-ozone-basics" target="_blank" rel="noopener noreferrer">
            <div className="ref-number">[4]</div>
            <div className="ref-title">U.S. EPA｜Ground-level Ozone Basics</div>
            <div className="ref-description">EPA 對地表臭氧污染、NOx/VOCs 與陽光反應及呼吸健康影響的公開說明。</div>
          </a>

          <a className="reference-item" href="https://aepromo.org/en/ozonotherapy-history/" target="_blank" rel="noopener noreferrer">
            <div className="ref-number">[5]</div>
            <div className="ref-title">AEPROMO｜Ozonotherapy History</div>
            <div className="ref-description">臭氧在醫療與消毒史中被劑量化使用的歷史脈絡。</div>
          </a>

          <a className="reference-item" href="#summary">
            <div className="ref-number">[6]</div>
            <div className="ref-title">使用者提供附件｜WETOP 環境淨化技術之科學說明與安全原則聲明</div>
            <div className="ref-description">PICT/AOP/ROS 技術定位與 WETOP 安全鐵律的內部技術說明。</div>
          </a>
        </div>
      </section>

      <footer>
        <p>WETOP PICT 技術與臭氧安全答覆網站｜內容用途：專業說明、科學答辯與公開資料對照。</p>
      </footer>
    </div>
  );
}