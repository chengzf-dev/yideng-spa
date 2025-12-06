import { productAtomWithImmer } from "@stores/index";
import { useAtom } from "jotai";
import { useEffect } from "react";

const Index = () => {
	const [data, setData] = useAtom(productAtomWithImmer);
	useEffect(() => {
	   console.log('dom render');
	}, []);
	return (
		<div className="space-y-4">
			<div>
				<p>名称：{data.name}</p>
				<p>标签：{data.tags.join(", ")}</p>
			</div>
			<div className="flex gap-2">
				<button
					type="button"
					onClick={() => {
						setData((draft) => {
							draft.name =
								draft.name === "无意义渲染" ? "Jotai Immer" : "无意义渲染";
						});
					}}
				>
					切换名称（jotai-immer）
				</button>
				<button
					type="button"
					onClick={() => {
						setData((draft) => {
							draft.tags.push(`tag-${draft.tags.length + 1}`);
						});
					}}
				>
					追加标签（jotai-immer）
				</button>
			</div>
		</div>
	);
};
Index.whyDidYouRender = true;
export default Index;
