import { h, render } from "preact";
import { useState, useMemo } from "preact/hooks";
import styles from "./index.scss";

//ライトボウガンの武器係数
const WEAPON_FACTOR = 1.3

function App() {
  const [displayedAttackPower, setDisplayedAttackPower] = useState(390);
  const [bulletDamage, setBulletDamage] = useState(24);

  const [artillerySkill, setArtillerySkill] = useState(1.5);
  const [attackSkill, setAttackSkill] = useState(0);
  const [fullChargeSkill, setFullChargeSkill] = useState(0);
  const [recriminationSkill, setRecriminationSkill] = useState(0);
  const [challengerSkill, setChallengerSkill] = useState(0);
  const [firepowerSkill, setFirepowerSkill] = useState(1);

  const [amuletItem, setAmuletItem] = useState(6);
  const [clawItem, setClawItem] = useState(9);
  const [remedyForDemonsItem, setRemedyForDemonsItem] = useState(0);
  const [superhumanStrengthItem, setSuperhumanStrengthItem] = useState(0);
  const [dustItem, setDustItem] = useState(0);
  const [bulletItem, setBulletItem] = useState(0);

  const [artOfBombardmentCatFood, setArtOfBombardmentCatFood] = useState(1);
  const [attackPowerUpCatFood, setAttackPowerUpCatFood] = useState(0);

  //基礎武器倍率
  const baseWeaponMultiplier = useMemo(() => {
    return displayedAttackPower / WEAPON_FACTOR
  }, [displayedAttackPower]);

  //ダメージ上限
  const damageLimit = useMemo(() => {
    return baseWeaponMultiplier * 2 / 100 * bulletDamage
  }, [bulletDamage, baseWeaponMultiplier])

  //ダメージ
  const damage = useMemo(() => {
    return ((baseWeaponMultiplier * artillerySkill * firepowerSkill * artOfBombardmentCatFood + attackSkill + fullChargeSkill + recriminationSkill + challengerSkill + amuletItem + clawItem + remedyForDemonsItem + superhumanStrengthItem + dustItem + bulletItem + artOfBombardmentCatFood) / 100) * bulletDamage
  }, [bulletDamage, baseWeaponMultiplier, artillerySkill, attackSkill, fullChargeSkill, recriminationSkill, challengerSkill, firepowerSkill, amuletItem, clawItem, remedyForDemonsItem, superhumanStrengthItem, dustItem, bulletItem, artOfBombardmentCatFood, attackPowerUpCatFood])

  return (
    <div>
      <h1>【MHW】徹甲ライトダメージ計算ツール</h1>
      <div>
        <span>武器の表示攻撃力</span>
        <input type="number" value={displayedAttackPower} onChange={(event) => setDisplayedAttackPower(event.target.value)} />
      </div>
      <div>
        <span>使用する徹甲榴弾</span>
        <select value={bulletDamage} onChange={(event) => setBulletDamage(Number(event.target.value))}>
          <option value="12">Lv1</option>
          <option value="17">Lv2</option>
          <option value="24">Lv3</option>
        </select>
      </div>
      <div>
        <span>ダメージ上限:{damageLimit}</span>
      </div>
      <div>
        <h2>スキル</h2>
        <span>
          <span>砲術</span>
          <select value={artillerySkill} onChange={(event) => setArtillerySkill(Number(event.target.value))}>
            <option value="1">使用しない</option>
            <option value="1.1">Lv1</option>
            <option value="1.2">Lv2</option>
            <option value="1.3">Lv3</option>
            <option value="1.4">Lv4</option>
            <option value="1.5">Lv5</option>
          </select>
        </span>
        <span>
          <span>攻撃</span>
          <select value={attackSkill} onChange={(event) => setAttackSkill(Number(event.target.value))}>
            <option value="0">使用しない</option>
            <option value="3">Lv1</option>
            <option value="6">Lv2</option>
            <option value="9">Lv3</option>
            <option value="12">Lv4</option>
            <option value="15">Lv5</option>
            <option value="18">Lv6</option>
            <option value="21">Lv7</option>
          </select>
        </span>
        <span>
          <span>フルチャージ</span>
          <select value={fullChargeSkill} onChange={(event) => setFullChargeSkill(Number(event.target.value))}>
            <option value="0">使用しない</option>
            <option value="5">Lv1</option>
            <option value="10">Lv2</option>
            <option value="20">Lv3</option>
          </select>
        </span>
        <span>
          <span>逆恨み</span>
          <select value={recriminationSkill} onChange={(event) => setRecriminationSkill(Number(event.target.value))}>
            <option value="0">使用しない</option>
            <option value="5">Lv1</option>
            <option value="10">Lv2</option>
            <option value="15">Lv3</option>
            <option value="20">Lv4</option>
            <option value="25">Lv5</option>
          </select>
        </span>
        <span>
          <span>挑戦者</span>
          <select value={challengerSkill} onChange={(event) => setChallengerSkill(Number(event.target.value))}>
            <option value="0">使用しない</option>
            <option value="4">Lv1</option>
            <option value="8">Lv2</option>
            <option value="12">Lv3</option>
            <option value="16">Lv4</option>
            <option value="20">Lv5</option>
            <option value="24">Lv6</option>
            <option value="28">Lv7</option>
          </select>
        </span>
        <span>
          <span>火事場力</span>
          <select value={firepowerSkill} onChange={(event) => setFirepowerSkill(Number(event.target.value))}>
            <option value="1">使用しない</option>
            <option value="1">Lv1</option>
            <option value="1.05">Lv2</option>
            <option value="1.05">Lv3</option>
            <option value="1.1">Lv4</option>
            <option value="1.15">Lv5</option>
            <option value="1.25">Lv6</option>
            <option value="1.4">Lv7</option>
          </select>
        </span>
      </div>
      <div>
        <h2>アイテム</h2>
        <span>
          <span>力の護符</span>
          <input type="checkbox" checked={amuletItem === 6} onChange={(event) => setAmuletItem(event.target.checked ? 6 : 0)} />
        </span>
        <span>
          <span>力の爪</span>
          <input type="checkbox" checked={clawItem === 9} onChange={(event) => setClawItem(event.target.checked ? 9 : 0)} />
        </span>
        <span>
          <span>鬼人薬系</span>
          <select value={remedyForDemonsItem} onChange={(event) => setRemedyForDemonsItem(Number(event.target.value))}>
            <option value="0">使用しない</option>
            <option value="5">鬼人薬</option>
            <option value="7">鬼人薬グレート</option>
          </select>
        </span>
        <span>
          <span>怪力系</span>
          <select value={superhumanStrengthItem} onChange={(event) => setSuperhumanStrengthItem(Number(event.target.value))}>
            <option value="0">使用しない</option>
            <option value="10">怪力の種</option>
            <option value="25">怪力の丸薬</option>
          </select>
        </span>
        <span>
          <span>鬼人の粉塵</span>
          <input type="checkbox" checked={dustItem === 10} onChange={(event) => setDustItem(event.target.checked ? 10 : 0)} />
        </span>
        <span>
          <span>鬼人弾</span>
          <input type="checkbox" checked={bulletItem === 10} onChange={(event) => setBulletItem(event.target.checked ? 10 : 0)} />
        </span>
      </div>
      <div>
        <h2>ネコ飯</h2>
        <span>
          <span>ネコの砲撃術</span>
          <input type="checkbox" checked={artOfBombardmentCatFood === 1.15} onChange={(event) => setArtOfBombardmentCatFood(event.target.checked ? 1.15 : 1)} />
        </span>
        <span>
          <span>攻撃力UP</span>
          <select value={attackPowerUpCatFood} onChange={(event) => setAttackPowerUpCatFood(Number(event.target.value))}>
            <option value="0">使用しない</option>
            <option value="5">【小】</option>
            <option value="10">【中】</option>
            <option value="15">【大】</option>
          </select>
        </span>
      </div>
      <div>
        <h2>結果</h2>
        <span>{damage}</span>
      </div>
    </div>
  );
}

render(<App />, document.getElementById("app"));
